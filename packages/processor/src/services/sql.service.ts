import { IUserGameHistory } from 'erbs-client';
import { EventEmitter } from 'events';
import { Players } from '../models/player.model';
import {
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

    this.emitter.on('mongo', (data) => {
      this.syncToMongo(data)
        .then(() => {
          console.log('[Mongo][Syncd Mongo]', data);
        })
        .catch((e) => {
          console.error('[Mongo][Failed To Sync to Mongo]', data, e);
        });
    });
  }

  public async upsertGame(game: IUserGameHistory) {
    const {
      userNum,
      gameId,
      seasonId,
      matchingTeamMode,
      versionMajor,
      versionMinor,
      ...rest
    } = game;
    try {
      console.log('Syncing Match', gameId);
      const existing: any = await Games.query()
        .where('playerId', '=', userNum)
        .findById(gameId);

      if (existing && existing.id) {
        await Games.query().deleteById(existing.id);
      }

      const {
        masteryLevel,
        equipment,
        skillLevelInfo,
        criticalStrikeChance,
        skillOrderInfo,
        ...rec
      } = rest as any;

      const skills = Object.entries(skillOrderInfo).map(([level, skill]) => ({
        gameId,
        skillId: +skill,
        level: +level
      }));
      const insertEquipment = Object.values(equipment).map((item) => ({
        itemId: +item,
        gameId
      }));
      await Games.query().insertGraph({
        id: +gameId,
        averageMmr: 0,
        seasonId,
        gameMode: matchingTeamMode,
        version: `0.${versionMajor}.${versionMinor}`,
        players: [
          {
            gameId,
            userNum,
            criticalChance: criticalStrikeChance,
            skills,
            matchingTeamMode,
            equipment: insertEquipment,
            ...rec
          }
        ]
      } as any);
    } catch (e) {
      console.error(e);
    }
  }

  public async upsertPlayer(player: Player) {
    const sqlRecord: any = await Player.query().findOne({ id: player.id });

    if (sqlRecord.name !== player.name) {
      try {
        await Player.query()
          .findOne({ id: player.id })
          .patch({
            name: player.name,
            previousNames: `${sqlRecord.previousNames} ${sqlRecord.name}`.trim()
          } as any);
      } catch (e) {
        console.warn(e);
      }
    } else if (!sqlRecord) {
      try {
        await Player.query().insert({
          id: player.id,
          name: player.name
        });

        if (player.seasonRecords && player.seasonRecords.length) {
          for (const {
            characterStats,
            seasonId,
            userNum,
            ...record
          } of player.seasonRecords) {
            await PlayerSeasons.query().insertGraph({
              ...record,
              playerId: +userNum,
              seasonId: +seasonId,
              characterStats: characterStats.map((stat) => ({
                ...stat,
                playerId: +userNum,
                seasonId: +seasonId
              }))
            } as any);
          }
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.emitter.emit('mongo', player.id);
        return;
      }
    }

    try {
      const updatingSeasons = [
        ...new Set(player.seasonRecords.map((record) => record.seasonId))
      ];

      for (const season of updatingSeasons) {
        await PlayerSeasonCharacters.query()
          .where('seasonId', '=', +season)
          .where('playerId', '=', +player.id)
          .delete();

        await PlayerSeasons.query()
          .where('seasonId', '=', +season)
          .where('playerId', '=', +player.id)
          .delete();
      }

      for (const {
        characterStats,
        userNum,
        ...record
      } of player.seasonRecords) {
        try {
          await PlayerSeasons.query().insertGraph({
            ...record,
            playerId: +userNum,
            characterStats: characterStats.map((stat) => ({
              ...stat,
              playerId: +userNum
            }))
          } as any);
        } catch (e) {
          console.warn(e);
        }
      }
    } catch (e) {
      console.warn(e);
    } finally {
      this.emitter.emit('mongo', player.id);
    }
  }

  public processMatch(match) {
    this.emitter.emit('match', match);
  }

  public processPlayer(player) {
    this.emitter.emit('player', player);
  }

  public async syncToMongo(playerId: number) {
    const results = await Player.query()
      .withGraphFetched(
        '[games.[skills, equipment], seasonRecords.[characterStats]]'
      )
      .findById(playerId);

    if (results) {
      const basicObject = results.toJSON();
      const seasonRecords = {};
      basicObject?.seasonRecords?.map((record) => {
        if (seasonRecords[record?.seasonId]) {
          seasonRecords[record.seasonId].info.push(record);
        } else {
          seasonRecords[record?.seasonId] = {
            season: record?.seasonId,
            info: [record]
          };
        }
      });

      await Players.findOneAndUpdate({ id: playerId }, basicObject as any, {
        new: true,
        upsert: true
      });
    }
  }
}
