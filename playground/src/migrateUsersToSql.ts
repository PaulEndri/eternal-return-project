import { Players } from './models/player.model';
import { PlayerSeasons, Games } from './models/sql.models';
import mongoose from 'mongoose';
import { MatchData } from './models/matchData.model';

const OPS = {
  PLAYERS: false,
  MATCHES: true
};
mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const syncPlayers = async () => {
  const players = await Players.find({}, [], { lean: true });
  for (const player of players) {
    const { id, seasonRecords } = player;
    console.log('Syncing Player', id);
    try {
      for (const { season, info, userNum } of seasonRecords) {
        console.log('[test]', userNum);
        try {
          for (const { characterStats, userNum, ...record } of info) {
            await PlayerSeasons.query().insertGraph({
              ...record,
              playerId: +id,
              seasonId: +season,
              characterStats: characterStats.map((stat) => ({
                ...stat,
                playerId: +id,
                seasonId: +season
              }))
            } as any);
          }
        } catch (e) {
          console.warn(e);
        }
      }
      // await Player.query().insertGraph({
      //   id,
      //   name,
      //   seasonRecords: seasonRecords
      //     .map((rec) => rec.info)
      //     .flat()
      //     .map(({ userNum, characterStats, ...season }) => ({
      //       ...season,
      //       playerId: userNum
      //     })),
      //   seasonCharacters: seasonRecords
      //     .map((rec) => rec.info)
      //     .flat()
      //     .filter((season) => season.characterStats)
      //     .map(({ userNum, characterStats, seasonId }) =>
      //       (characterStats || []).map(({ ...stats }) => ({
      //         playerId: userNum,
      //         seasonId,
      //         ...stats
      //       }))
      //     )
      //     .flat()
      // } as any);
    } catch (e) {
      console.error(e);
    }
  }
};

const syncMatches = async () => {
  const matches = await MatchData.find(
    { 'data.1': { $exists: true }, version: { $exists: false } } as any,
    [],
    {
      lean: true
    }
  );

  for (const match of matches) {
    const { id, gameMode, seasonId, averageMMR, version, data } = match;
    try {
      console.log('Syncing Match', id);
      const existing: any = await Games.query().findById(id);

      if (existing && existing.id) {
        continue;
      }
      await Games.query().insertGraph({
        id,
        averageMmr: averageMMR,
        seasonId,
        gameMode,
        version: version ? `0.${version.major}.${version.minor}` : '0.22.0',
        players: (data || []).map(
          ({
            userNum,
            gameId,
            masteryLevel,
            equipment,
            skillLevelInfo,
            criticalStrikeChance,
            skillOrderInfo,
            ...rec
          }) => {
            const skills = skillOrderInfo
              ? Object.entries(skillOrderInfo).map(([level, skill]) => ({
                  gameId,
                  skillId: +skill,
                  level: +level
                }))
              : [];
            const insertEquipment = equipment
              ? Object.values(equipment).map((item) => ({
                  itemId: +item,
                  gameId
                }))
              : [];

            return {
              gameId,
              userNum,
              criticalChance: criticalStrikeChance,
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
