import { Players } from './models/player.model';
// import { Matches } from './models/match.model';
import { MatchData } from './models/matchData.model';

import mongoose from 'mongoose';
import fs from 'fs';
const logs = [];

const log = (message, ...args) => {
  logs.push(message);

  console.log(message, ...args);
};

mongoose.connect(
  'mongodb+srv://local:test@cluster0.pvbke.mongodb.net/erbs?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const main = async () => {
  const matchData = await MatchData.find({}, [], { lean: true });

  const matches = matchData.map((data) => [data.id, data]);
  const rogueMatchHistory: any = {};

  const playerStream = await Players.find({}).stream();
  playerStream.on('data', async (player) => {
    const newMatches = [];
    for (const match of player.matches) {
      if (typeof match === 'number') {
        newMatches.push(match);
        continue;
      }

      if (matches[match.gameId] && matches[match.gameId].data) {
        const recordExists = matches[match.gameId].data.some(
          ({ userNum }) => player.id === userNum
        );

        if (recordExists) {
          newMatches.push(match);
        } else {
          matches[match.gameId].data.push(match);
        }
      } else {
        newMatches.push(match.gameId);

        if (rogueMatchHistory[match.gameId]) {
          rogueMatchHistory[match.gameId].data.push(match);
        } else {
          rogueMatchHistory[match.gameId] = {
            id: match.gameId,
            data: [match]
          };
        }
      }
    }

    player.matches = [...new Set(newMatches)];

    await player.save();
  });

  fs.writeFileSync(
    'src/generated/shit.json',
    JSON.stringify([
      ...Object.values(matches),
      ...Object.values(rogueMatchHistory)
    ])
  );
};

main().then(() => {
  log('[Error] We Shouldnt Be Here');
});
