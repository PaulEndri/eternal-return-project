import { EventEmitter } from 'events';
import {
  GamePlayers,
  Games,
  Player,
  PlayerSeasonCharacters,
  PlayerSeasons
} from '../models/sql.models';

export class SqlService {
  public emitter = new EventEmitter();

  constructor() {
    this.emitter.on('match', (data) => {
      this.upsertGame(data)
        .then(() => {
          console.log('[Sql][Processed Match]', data.id);
        })
        .catch((e) => {
          console.error('[Sql][Failed to process match]', data.id, e);
        });
    });

    this.emitter.on('player', (data) => {
      this.upsertPlayer(data)
        .then(() => {
          console.log('[Sql][Processed Player]', data.id);
        })
        .catch((e) => {
          console.error('[Sql][Failed to process Player]', data.id, e);
        });
    });
  }

  private async upsertGame(game) {
    const { id, gameMode, seasonId, averageMMR, version, data } = game;
    try {
      console.log('Syncing Match', id);
      const existing: any = await Games.query().findById(id);

      if (existing && existing.id) {
        try {
          await Games.query()
            .findById(id)
            .patch({
              gameMode,
              seasonId,
              averageMmr: averageMMR,
              version: `0.${version.major}.${version.minor}`
            } as any);
        } catch (e) {
          console.warn(e);
        }

        if (!data || !data.length) {
          return;
        }
        for (const record of data) {
          const {
            userNum,
            gameId,
            masteryLevel,
            equipment,
            skillLevelInfo,
            criticalStrikeChance,
            skillOrderInfo,
            ...rec
          } = record;

          const foundEntry = await GamePlayers.query().where({
            gameId,
            playerId: +userNum
          });

          if (foundEntry && foundEntry.length) {
            continue;
          }
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

          try {
            await GamePlayers.query().insertGraph({
              gameId,
              userNum,
              criticalChance: criticalStrikeChance,
              skills,
              equipment: insertEquipment,
              ...rec
            });
          } catch (e) {
            console.warn(e);
          }
        }
      } else {
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
              criticalStrikeChance,
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
                criticalChance: criticalStrikeChance,
                skills,
                equipment: insertEquipment,
                ...rec
              };
            }
          )
        } as any);
      }
    } catch (e) {
      console.error(e);
    }
  }

  private async upsertPlayer(player) {
    const sqlRecord = await Player.query().findOne({ id: player.id });

    if (sqlRecord.name !== player.name) {
      try {
        await Player.query()
          .findOne({ id: player.id })
          .patch({
            name: player.name,
            previousNames: `${sqlRecord.previousNames} ${sqlRecord.name}`.trim()
          });
      } catch (e) {
        console.warn(e);
      }
    } else if (!sqlRecord) {
      try {
        await Player.query().insertGraph({
          id: player.id,
          name: player.name,
          seasonRecords: player?.seasonRecords
            .map((rec) => rec.info)
            .flat()
            .map(({ userNum, characterStats, ...season }) => ({
              ...season,
              playerId: userNum
            })),
          seasonCharacters: player?.seasonRecords
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
        console.warn(e);
      } finally {
        return;
      }
    }

    try {
      for (const { info } of player.seasonRecords) {
        for (const { seasonId, userNum, characterStats, ...stats } of info) {
          try {
            await PlayerSeasons.query()
              .where({
                seasonId: +seasonId,
                playerId: +userNum
              })
              .patch({
                ...stats
              });
          } catch (e) {
            console.warn(e);
          }
          for (const charStats of characterStats) {
            try {
              await PlayerSeasonCharacters.query()
                .where({
                  seasonId: +seasonId,
                  playerId: +userNum
                })
                .patch({ ...charStats });
            } catch (e) {
              console.warn(e);
            }
          }
        }
      }
    } catch (e) {
      console.warn(e);
    }
  }

  public processMatch(match) {
    this.emitter.emit('match', match);
  }

  public processPlayer(player) {
    this.emitter.emit('player', player);
  }
}
