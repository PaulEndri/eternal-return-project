import { Players } from './models/player.model';
import { Matches } from './models/match.model';
import { ErBsClient } from 'erbs-client';
import mongoose from 'mongoose';
import fs from 'fs';

const logs = [];

const log = (message, ...args) => {
  logs.push(message);

  console.log(message, ...args);
};

setInterval(() => {
  fs.writeFileSync('src/logs.txt', logs.join('\n'));
}, 1000 * 30);

mongoose.connect(
  'mongodb+srv://local:test@cluster0.pvbke.mongodb.net/erbs?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const Client = new ErBsClient();

const playerCache = {};

const playerQueue = new Set();
const processedPlayers = new Set();

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

const playerCleanup = async () => {
  const players = await Players.find({});

  log('[Update] Beginning player cleanup');
  for (const player of players) {
    log(`[Player][${player.id}] Clean Up Commence`);

    try {
      const playerData = await Client.getPlayerRecord(player.id);
      const playerDataSeasonOne = await Client.getPlayerRecord(player.id, 1);

      await delay();

      if (!playerData) {
        continue;
      }
      player.name = playerData[0].nickname;
      player.seasonRecords = [
        {
          lastUpdated: new Date(),
          info: playerData,
          season: 0
        },
        {
          lastUpdated: new Date(),
          info: playerDataSeasonOne,
          season: 1
        }
      ];

      const matchHistory = await Client.getGamesForPlayer(player.id);

      const totalMatchHistory = new Set(player.matches || []);

      for (const match of matchHistory) {
        log(`[Player][${player.id}][Match][${match.gameId}] Processing`);

        totalMatchHistory.add(match.gameId);

        if (match.killerUserNum) {
          log(
            `[Player][${player.id}][Match][${match.gameId}] Has Killer: ${match.killerUserNum}`
          );

          const matchKiller = await Players.findOne({
            id: match.killerUserNum
          });

          if (matchKiller) {
            matchKiller.matches = [
              ...new Set(matchKiller.matches),
              match.gameId
            ];

            await matchKiller.save();
            log(
              `[Player][${player.id}][Match][${match.gameId}][Killer][${match.killerUserNum}] Updated`
            );
          } else {
            const newPlayer = {
              name: match.killDetail,
              id: match.killerUserNum,
              matches: [match.gameId],
              seasonRecords: []
            };

            await Players.create(newPlayer);
            `[Player][${player.id}][Match][${match.gameId}][Killer][${match.killerUserNum}] Created`;
          }
        }

        log(`[Player][${player.id}][Match][${match.gameId}] Processed`);
      }

      player.matches = [...totalMatchHistory];

      await player.save();
      log(`[Player][${player.id}] Clean Up Finished`);
    } catch (e) {
      log('[Fatal Error]', e);
    }
  }
};

const main = async () => {
  await playerCleanup();
  const players = await Players.find({}).lean();

  players.forEach(({ id, name }) => {
    playerQueue.add(id);

    playerCache[id] = name;
  });

  const playerIterator = playerQueue.values();

  while (playerQueue.size > 0) {
    let startTime = new Date().valueOf();
    const nextPlayerId = playerIterator.next().value;

    log(`[Player][Processing] ${nextPlayerId}`);

    processedPlayers.add(nextPlayerId);
    try {
      const matches = await Client.getGamesForPlayer(nextPlayerId);
      const matchIds = matches.map(({ gameId }) => gameId);

      try {
        const player = await Players.findOne({
          id: nextPlayerId,
          name: playerCache[nextPlayerId]
        });

        if (player) {
          log(`[Player][${nextPlayerId}] Updating Existing Mongo Record`);

          if (!player.matches) {
            player.matches = matchIds;
          } else {
            player.matches = [...new Set([...player.matches, ...matchIds])];
          }

          await player.save();
        } else {
          log(`[Player][${nextPlayerId}] Creating New Mongo Record`);

          await Players.create({
            id: nextPlayerId,
            name: playerCache[nextPlayerId],
            matches: matchIds
          });
        }

        log(`[Player][${nextPlayerId}] Saved Base Data`);
      } catch (e) {
        log(
          `[Player][${nextPlayerId}] Failed to Save base Data: ${e.message}`,
          e
        );

        await Players.deleteMany({ id: nextPlayerId });

        log(`[Player][${nextPlayerId}] Reset in Mongo, adding back to Queue`);
        playerQueue.add(nextPlayerId);
      }

      log(`[Update] Triggering Second Delay`);
      await delay();

      const data = [
        Client.getPlayerRecord(nextPlayerId, 0),
        Client.getPlayerRecord(nextPlayerId, 1)
      ];

      log(`[${nextPlayerId}] Fetched Season 0 and 1 Data`);

      const [zeroData, oneData] = await Promise.all(data);
      const seasonRecords: any = [
        {
          lastUpdated: new Date(),
          season: 0,
          info: zeroData
        },
        {
          lastUpdated: new Date(),
          season: 1,
          info: oneData
        }
      ];

      startTime = new Date().valueOf();
      try {
        await Players.findOneAndUpdate(
          { id: nextPlayerId, name: playerCache[nextPlayerId] },
          { $set: { seasonRecords } },

          { useFindAndModify: true }
        );

        log(`[Player][${nextPlayerId}] Updated Season Records`);
      } catch (e) {
        log(
          `[Player][${nextPlayerId}] Failed to Update Season Records: ${e.message}`,
          e
        );
      }

      for (const match of matches) {
        try {
          playerCache[match.killerUserNum] = match.killDetail;

          if (processedPlayers.has(match.killerUserNum)) {
            playerQueue.add(match.killerUserNum);
          }

          let matchRecord = await Matches.findOne({ id: match.gameId });

          log(
            `[Match][${match.gameId}] Mongo Record Is New: ${
              !matchRecord || matchRecord.isNew ? 'Yes' : 'No'
            }`
          );

          const update: any = {
            id: match.gameId,
            seasonId: match.seasonId,
            gameMode: match.matchingTeamMode,
            version: {
              major: match.versionMajor,
              minor: match.versionMinor
            }
          };

          if (!matchRecord || !matchRecord.data || !matchRecord.data.length) {
            update.data = [match];
          } else if (
            !matchRecord.data.some(({ userNum }) => userNum === nextPlayerId)
          ) {
            update.data = [...matchRecord.data, match];
          }

          if (!matchRecord) {
            await Matches.create(update);
          } else {
            matchRecord.overwrite(update);
            await matchRecord.save();
          }
          log(`[Match][${match.gameId}] Saved`);
        } catch (e) {
          log(`[Match][${match.gameId}] Failed to Save: ${e.message}`, e);

          await Matches.deleteMany({ id: match.gameId });

          log(`[Match][${match.gameId}] Purged from Records`);
        }
      }
    } catch (e) {
      log(`[Error][${nextPlayerId}] Failed to Fetch: ${e.message}`, e);
    }

    if (new Date().valueOf() - startTime < 1500) {
      log(
        `[Update][${nextPlayerId}] Took less than 1500ms to process, waiting`
      );
      await delay();
    }
  }
};

main().then(() => {
  log('[Error] We Shouldnt Be Here');
});
