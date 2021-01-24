import Bottleneck from 'bottleneck';
import { ErBsClient, IUserGameHistory } from 'erbs-client';
import { Players } from '../models/player.model';
import { IUserRecord } from 'erbs-client/dist/interfaces/IUserRecord';
import { IPlayer, IPlayerDocument, IPlayerSeasonRecord } from '../types/player';
import { Matches } from '../models/match.model';
import { Core } from '../libs/core';
import { SqlService } from './sql.service';

export class HandlerService extends Core {
  private client = new ErBsClient();
  private sqlService = new SqlService();
  private limiter = new Bottleneck({
    minTime: 1000 / (+process.env.RATE_LIMIT || 1),
    maxConcurrent: 1
  });

  getNumber = async (name: string): Promise<number> => {
    if (!name) {
      this.log.warn('[GetSeasonStatsForPlayer] Received No Id');
      return;
    }
    const cachedData: IPlayer = await Players.findOne({ name }, null, {
      lean: true,
      collation: {
        locale: 'en',
        strength: 2
      }
    });

    if (cachedData) {
      return cachedData.id;
    }

    const results = await this.limiter.schedule(() =>
      this.client.getPlayerNumber(name)
    );

    if (results) {
      await Players.create({
        name,
        id: results.userNum
      });
    }

    return results.userNum;
  };

  getSeasonalStatsForPlayer = async (
    id: number,
    seasonNumber = 0
  ): Promise<IUserRecord[]> => {
    if (!id) {
      this.log.warn('[GetSeasonStatsForPlayer] Received No Id');
      return;
    }

    this.log.info(`[Player][${id}][Season][${seasonNumber}] Fetching`);
    const cachedData = await Players.findOne({ id }, [], { upsert: true });
    let record: IPlayerSeasonRecord;

    if (
      cachedData.seasonRecords &&
      cachedData.seasonRecords.find(({ season }) => season === seasonNumber)
    ) {
      record = cachedData.seasonRecords.find(
        ({ season }) => season === seasonNumber
      );
    }

    this.log.info(
      `[Player][${id}][Season][${seasonNumber}] Making Client Call`
    );

    const results = await this.limiter.schedule(() =>
      this.client.getPlayerRecord(id, seasonNumber)
    );

    this.log.info(
      `[Player][${id}][Season][${seasonNumber}] Fetched and client call returned`
    );

    if (!results) {
      return null;
    }

    if (record) {
      record.info = results;
      record.lastUpdated = new Date();
    } else {
      if (!cachedData.seasonRecords) {
        cachedData.seasonRecords = [];
      }

      cachedData.seasonRecords.push({
        season: seasonNumber,
        lastUpdated: new Date(),
        info: results
      });
    }

    const data = await Players.findOneAndUpdate(
      { id },
      { seasonRecords: cachedData.seasonRecords },
      { upsert: true, useFindAndModify: true, new: true }
    );

    this.sqlService.processPlayer(data.toObject());

    this.log.info(`[Player][${id}][Season][${seasonNumber}] Processed`);

    return results;
  };

  getMatchesForPlayer = async (id: number) => {
    if (!id) {
      this.log.warn('[GetMatchesForPlayer] Received No Id');
      return;
    }

    let result;

    const cachedData: IPlayerDocument = await Players.findOne({ id }, [], {
      upsert: true,
      new: true
    });
    this.log.info(`[Player][${id}][Matches] Processing`);
    this.log.info(`[Player][${id}][Matches] Queing Client Call`);

    const results = await this.limiter.schedule(() =>
      this.client.getGamesForPlayer(id)
    );

    this.log.info(`[Player][${id}][Matches] Client Call Finished`);

    results.forEach((match) => {
      if (
        cachedData.matches.some((cachedMatch) => cachedMatch === match.gameId)
      ) {
        return;
      }

      cachedData.matches.push(match.gameId);
    });

    if (cachedData && cachedData.save) {
      result = await cachedData.save();
    } else {
      result = await Players.create(cachedData);
    }

    if (result.toObject) {
      this.sqlService.processPlayer(result.toObject({ versionKey: false }));
    }

    this.log.info(`[Player][${id}][Matches] Finished`);
  };

  saveMatches = async (matches: IUserGameHistory[]) => {
    for (const match of matches) {
      this.log.info(`[Match][${match.gameId}] Processing`);
      this.log.info(`[Match][${match.gameId}] Fetching`);
      let result;

      const matchRecord = await Matches.find({ id: match.gameId }, [], {
        upsert: true,
        new: true
      });

      if (matchRecord) {
        if (
          matchRecord.data &&
          matchRecord.data.length > 0 &&
          !matchRecord.data.some((m) => m.gameId === match.gameId)
        ) {
          matchRecord.data.push(match);
        } else if (!matchRecord.data || !matchRecord.data.length) {
          matchRecord.data = [match];
        }
      }

      if (matchRecord.save) {
        result = await matchRecord.save();
      } else {
        result = await Matches.create(matchRecord);
      }

      if (result.toObject) {
        this.sqlService.processMatch(result.toObject({ versionKey: false }));
      }
      this.log.info(`[Match][${match.gameId}] Saved`);

      if (match.killerUserNum) {
        await this.injectMatchIntoPlayer(match.gameId, match.killerUserNum);
      }
    }
  };

  injectMatchIntoPlayer = async (matchId: number, userId: number) => {
    this.log.info(`[Match][${matchId}][Killer][${userId}] Injecting Match`);

    const player = await Players.find({ id: userId }, [], {
      upsert: true,
      new: true
    });

    let result;
    if (player) {
      player.matches = [...new Set([...(player.matches || []), matchId])];

      if (player.save) {
        result = await player.save();
      } else {
        result = await Players.create(player);
      }
    } else {
      result = await Players.create({
        id: userId,
        name: '',
        matches: [matchId]
      });
    }

    if (result.toObject) {
      this.sqlService.processPlayer(result.toObject({ versionKey: false }));
    }
    this.log.info(`[Match][${matchId}][Killer][${userId}] Match Injected`);
  };
}
