import { MatchData } from './models/matchData.model';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Players } from './models/player.model';
import { ErBsClient, IUserRecord } from 'erbs-client';
dotenv.config();

const Client = new ErBsClient();

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const processMatches = async (matchesToClean) => {
  for (const match of matchesToClean) {
    const id = match.gameId;
    console.log('[Match][Processing]', id);

    const existingRecord = await MatchData.findOne({ id: +id });

    if (!existingRecord) {
      console.log('[Match][Creating]', id);

      await MatchData.create({
        id: +id,
        data: [match]
      });
    } else if (!existingRecord.data || !existingRecord.data.length) {
      console.log('[Match][Adding Matches]', id);

      existingRecord.data = [match];
      await existingRecord.save();
    } else {
      console.log('[Match][Merging Matches]', id);

      if (
        !existingRecord.data.some((record) => record.userNumm === match.userNum)
      ) {
        existingRecord.data.push(match);
        await existingRecord.save();
      }
    }

    console.log('[Match][Finished]', id);
  }
};

const updatePlayer = async ({ id, name, seasonRecords, matches }) => {
  await Players.findOneAndUpdate(
    { id },
    { name, seasonRecords, matches },
    { upsert: true, new: true, useFindAndModify: true }
  );
};

const processSeasonalRecords = (
  ranked: IUserRecord[],
  unranked: IUserRecord[]
) => {
  return [
    {
      season: 1,
      info: ranked,
      lastUpdated: new Date()
    },
    {
      season: 0,
      info: unranked,
      lastUpdated: new Date()
    }
  ];
};

const wait3 = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};

const main = async () => {
  console.log('[Main] Fetching Ranked Duos');
  const res = await Client.getTopDuos(1);
  await wait3();
  console.log('[Main] Fetching Ranked Solos');
  const res2 = await Client.getTopSolos(1);
  await wait3();
  console.log('[Main] Fetching Ranked Squads');
  const res3 = await Client.getTopSquads(1);
  await wait3();
  console.log('[Main] Fetching Unranked Duos');
  const res4 = await Client.getTopDuos(1);
  await wait3();
  console.log('[Main] Fetching Unranked Solos');
  const res5 = await Client.getTopSolos(1);
  await wait3();
  console.log('[Main] Fetching Unranked Squads');
  const res6 = await Client.getTopSquads(1);
  await wait3();

  console.log('[Main] Fetched All');
  const results = [res, res2, res3, res4, res5, res6];

  for (const playerList of results) {
    for (const player of playerList) {
      console.log('[Player][Processing]', player.userNum);
      const matchHistory = await Client.getGamesForPlayer(player.userNum);
      await wait3();
      const [ranked, unranked] = await Promise.all([
        Client.getPlayerRecord(player.userNum, 1),
        Client.getPlayerRecord(player.userNum, 0)
      ]);

      await updatePlayer({
        id: player.userNum,
        name: player.nickname,
        seasonRecords: processSeasonalRecords(ranked, unranked),
        matches: matchHistory.map((game) => game.gameId)
      });
      console.log('[Player][Processed]', player.userNum);

      await processMatches(matchHistory);
    }
  }
};

main().then(() => {
  console.log('done');
  process.exit(1);
});
