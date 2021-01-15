import { MatchData } from './models/matchData.model';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const cleanupPlayers = async (missingData) => {
  const matchesToClean = Object.entries<any[]>(missingData as any);

  for (const [id, matches] of matchesToClean) {
    console.log('[Processing]', id);

    const existingRecord = await MatchData.findOne({ id: +id });

    if (!existingRecord) {
      console.log('[Creating]', id);

      return await MatchData.create({
        id: +id,
        data: matches
      });
    } else if (!existingRecord.data || !existingRecord.data.length) {
      console.log('[Adding Matches]', id);

      existingRecord.data = matches;
      await existingRecord.save();
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

    await existingRecord.save();
    console.log('[Finished]', id);
  }
};

const main = async () => {
  for (let i = 0; i < 100; i++) {
    const fileName = `organizedMasterList-partial-${i}.json`;
    console.log('[Processing File]', fileName);

    let contents = fs.readFileSync(
      `src/generated/sweetjesus/${fileName}`
    ) as any;
    let data = JSON.parse(contents);
    contents = null;
    await cleanupPlayers(data);
    data = null;
  }
};
main().then(() => {
  console.log('[Error] We Shouldnt Be Here');
});
