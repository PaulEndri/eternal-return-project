import { Players } from './models/player.model';
// import { Matches } from './models/match.model';
import { MatchData } from './models/matchData.model';
import players from './generated/playersNeedingCleanup.json';

import mongoose from 'mongoose';
import fs from 'fs';

import dotenv from 'dotenv';

dotenv.config();
const logs = [];

const writeFile = (data) => {
  fs.writeFileSync(
    `src/generated/mongo/${data.userNum}-${data.gameId}.json`,
    JSON.stringify(data, null, 2)
  );

  console.log('[Wrote File]', `${data.userNum}-${data.gameId}`);
};
const log = (message, ...args) => {
  logs.push(message);

  console.log(message, ...args);
};

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const missingData = {};

// const oldMain = async () => {
//   const matchData = await MatchData.find({}, [], { lean: true });

//   const matches = matchData.map((data) => [data.id, data]);
//   const rogueMatchHistory: any = {};

//   const playerStream = await Players.find({}).stream();
//   playerStream.on('data', async (player) => {
//     const newMatches = [];
//     for (const match of player.matches) {
//       if (typeof match === 'number') {
//         newMatches.push(match);
//         continue;
//       }

//       if (matches[match.gameId] && matches[match.gameId].data) {
//         const recordExists = matches[match.gameId].data.some(
//           ({ userNum }) => player.id === userNum
//         );

//         if (recordExists) {
//           newMatches.push(match);
//         } else {
//           matches[match.gameId].data.push(match);
//         }
//       } else {
//         newMatches.push(match.gameId);

//         if (rogueMatchHistory[match.gameId]) {
//           rogueMatchHistory[match.gameId].data.push(match);
//         } else {
//           rogueMatchHistory[match.gameId] = {
//             id: match.gameId,
//             data: [match]
//           };
//         }
//       }
//     }

//     player.matches = [...new Set(newMatches)];

//     await player.save();
//   });

//   fs.writeFileSync(
//     'src/generated/shit.json',
//     JSON.stringify([
//       ...Object.values(matches),
//       ...Object.values(rogueMatchHistory)
//     ])
//   );
// };

const cleanupPlayers = async () => {
  for (const { id } of players) {
    console.log('[Processing]', id);
    const mongoRecord = await Players.findOne({ id });

    if (mongoRecord) {
      const newMatches = new Set();

      for (const match of mongoRecord.matches) {
        if (typeof match === 'number') {
          console.log('[No fixing needed]', match);
          newMatches.add(match);
          continue;
        }

        console.log('[Queueing To Fix]', match.gameId);
        if (!missingData[match.gameId]) {
          missingData[match.gameId] = [];
        }

        newMatches.add(match.gameId);
        missingData[match.gameId].push(match);
        writeFile(match);
      }

      mongoRecord.matches = [...newMatches];
      await mongoRecord.save();
      console.log('[Saved]', id);
    } else {
      console.warn('Yo boss, what the fuck, this thing is missing', id);
    }
  }

  console.log('[Finished Cleaning Up Match History]');

  const matchesToClean = Object.entries<any[]>(missingData);

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
  log('[Error] We Shouldnt Be Here');
});
