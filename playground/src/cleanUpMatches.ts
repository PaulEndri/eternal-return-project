import { MatchData } from './models/matchData.model';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import missingData from './generated/organizedMasterList-partial-9.json';
dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const cleanupPlayers = async () => {
  const matchesToClean = Object.entries<any[]>(missingData as any);

  for (const [id, matches] of matchesToClean) {
    console.log('[Processing]', id);

    const existingRecord = await MatchData.findOne({ id: +id });

    if (!existingRecord) {
      console.log('[Creating]', id);

      await MatchData.create({
        id: +id,
        data: matches
      });
    } else if (!existingRecord.data || !existingRecord.data.length) {
      console.log('[Adding Matches]', id);

      existingRecord.data = matches;
      await existingRecord.save;
    } else {
      console.log('[Merging Matches]', id);

      const existingPlayers = existingRecord.data.map(({ userNum }) => userNum);
      const matchesToAdd = matches.filter(
        ({ userNum }) => !existingPlayers.some((x) => x === userNum)
      );

      if (matchesToAdd.length > 0) {
        existingRecord.data = [...existingRecord.data, ...matchesToAdd];
        await existingRecord.save();
      }
    }

    console.log('[Finished]', id);
  }
};
cleanupPlayers().then(() => {
  console.log('[Error] We Shouldnt Be Here');
});
