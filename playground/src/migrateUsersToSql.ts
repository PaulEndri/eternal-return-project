import { Players } from './models/player.model';
import { Matches } from './models/match.model';
import { Player, Games } from './models/sql.models';
import mongoose from 'mongoose';

const OPS = {
  PLAYERS: false,
  MATCHES: true
};
mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const syncPlayers = async () => {
  for await (const player of Players.find({}, [], { lean: true })) {
    const { id, name, seasonRecords } = player;
    console.log('Syncing Player', id);
    try {
      await Player.query().insertGraph({
        id,
        name,
        seasonRecords: seasonRecords
          .map((rec) => rec.info)
          .flat()
          .map(({ userNum, characterStats, ...season }) => ({
            ...season,
            playerId: userNum
          })),
        seasonCharacters: seasonRecords
          .map((rec) => rec.info)
          .flat()
          .filter((season) => season.characterStats)
          .map(({ userNum, characterStats, seasonId }) =>
            (characterStats || []).map(({ ...stats }) => ({
              playerId: userNum,
              seasonId,
              ...stats
            }))
          )
          .flat()
      } as any);
    } catch (e) {
      console.error(e);
    }
  }
};

const syncMatches = async () => {
  for await (const match of Matches.find({}, [], { lean: true })) {
    const { id, gameMode, seasonId, averageMMR, version, data } = match;
    try {
      console.log('Syncing Match', id);

      await Games.query().insertGraph({
        id,
        averageMmr: averageMMR,
        seasonId,
        gameMode,
        version: `0.${version.major}.${version.minor}`,
        players: (data || []).map(
          ({
            userNum,
            gameId,
            masteryLevel,
            equipment,
            skillLevelInfo,
            skillOrderInfo,
            ...rec
          }) => {
            const skills = Object.entries(skillOrderInfo).map(
              ([level, skill]) => ({
                gameId,
                skillId: +skill,
                level: +level
              })
            );
            const insertEquipment = Object.values(equipment).map((item) => ({
              itemId: +item,
              gameId
            }));

            return {
              gameId,
              userNum,
              skills,
              equipment: insertEquipment,
              ...rec
            };
          }
        )
      } as any);
    } catch (e) {
      console.error(e);
    }
  }
};

const main = async () => {
  if (OPS.PLAYERS) {
    await syncPlayers();
  }

  if (OPS.MATCHES) {
    await syncMatches();
  }
};
main().then(() => console.log('[done]'));
