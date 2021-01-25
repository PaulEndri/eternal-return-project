import Bottleneck from 'bottleneck';
import { ErBsClient, IUserGameHistory } from 'erbs-client';
import { IUserRecord } from 'erbs-client/dist/interfaces/IUserRecord';
import { Core } from '../libs/core';
import { SqlService } from './sql.service';
import { GamePlayers, Player } from '../models/sql.models';

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

    const record = await Player.query().findOne('name', '=', name);

    if (record) {
      return record.id;
    }
    const results = await this.limiter.schedule(() =>
      this.client.getPlayerNumber(name)
    );

    if (results) {
      await Player.query().insert({
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
    const record = await Player.query().findById(id);

    this.log.info(
      `[Player][${id}][Season][${seasonNumber}] Making Client Call`
    );

    const results = await this.limiter.schedule(() =>
      this.client.getPlayerRecord(id, seasonNumber)
    );

    this.log.info(
      `[Player][${id}][Season][${seasonNumber}] Fetched and client call returned`
    );

    record.seasonRecords = results;

    await this.sqlService.upsertPlayer(record);

    this.log.info(`[Player][${id}][Season][${seasonNumber}] Processed`);

    return results;
  };

  getMatchesForPlayer = async (id: number) => {
    if (!id) {
      this.log.warn('[GetMatchesForPlayer] Received No Id');
      return;
    }

    this.log.info(`[Player][${id}][Matches] Processing`);
    this.log.info(`[Player][${id}][Matches] Queing Client Call`);

    const results = await this.limiter.schedule(() =>
      this.client.getGamesForPlayer(id)
    );

    this.log.info(`[Player][${id}][Matches] Client Call Finished`);

    await this.saveMatches(results);

    this.log.info(`[Player][${id}][Matches] Finished`);
  };

  saveMatches = async (matches: IUserGameHistory[]) => {
    const records = await GamePlayers.query()
      .whereIn(
        'gameId',
        matches.map((match) => match.gameId)
      )
      .where('userNum', '=', matches[0].userNum);

    for (const match of matches) {
      this.log.info(`[Match][${match.gameId}] Processing`);
      this.log.info(`[Match][${match.gameId}] Fetching`);

      if (records.find((r) => r.gameId === match.gameId)) {
        continue;
      } else {
        this.sqlService.upsertGame(match);
      }
    }
  };
}
