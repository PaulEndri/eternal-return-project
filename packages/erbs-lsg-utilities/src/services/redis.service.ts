import { createClient } from 'redis';
import { Core } from '../libs/core';
import { QueueTypes } from '../types/queueTypes';
import { RedisJsonActions } from '../types/redisJsonActions';
import { RedisKeys } from '../types/redisKeys';
import { RedisLog } from '../models/mongo/redisLog.model';

// type RedisDocument = {
//   [RedisKeys.RATE_LIMIT_KEY]: number;
//   [RedisKeys.QUEUED_PLAYER_NAMES_KEY]: string[];
//   [RedisKeys.QUEUED_PLAYER_NUMBERS_KEY]: number[];
//   [RedisKeys.QUEUED_PLAYER_GAMES_KEY]: number[];
// };

export class RedisService extends Core {
  static DEFAULT_DOCUMENT_NAME = 'ERBSLSGAPITHROTTLE';

  private client = createClient({
    port: +process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_AUTH
  });
  private loaded = false;

  constructor() {
    super();
    this.client.once('ready', () => {
      this.log.info('[Redis] Client Loaded');
      this.loaded = true;

      this.initializeDocument().then(() => this.log.info('[Doc Loaded]'));
    });

    process.on('beforeExit', () => this.client.end(true));
  }

  private waitForLoad = async () => {
    if (!this.loaded) {
      this.log.info('[Redis] Client not loaded, waiting');
      return await new Promise<void>((res) =>
        this.client.once('ready', () => {
          res();
        })
      );
    } else {
      return;
    }
  };

  private initializeDocument = async () => {
    const results = await this.json();

    try {
      return JSON.parse(results);
    } catch (e) {
      this.log.info(e);

      const newDoc = {
        [RedisKeys.RATE_LIMIT_KEY]: +process.env.RATE_LIMIT || 5,
        [RedisKeys.QUEUED_PLAYER_NAMES_KEY]: [],
        [RedisKeys.QUEUED_PLAYER_NUMBERS_KEY]: [],
        [RedisKeys.QUEUED_PLAYER_GAMES_KEY]: []
      };

      await this.json(newDoc, '.', RedisJsonActions.SET);

      return newDoc[RedisKeys.RATE_LIMIT_KEY];
    }
  };

  private json = async <T = string>(
    value?: any,
    key: QueueTypes | RedisKeys.RATE_LIMIT_KEY | '.' = '.',
    action: keyof typeof RedisJsonActions = 'GET',
    name = RedisService.DEFAULT_DOCUMENT_NAME,
    stringify = true
  ) => {
    await this.waitForLoad();

    const command = `JSON.${action}`;
    const args = `${name} ${key}${
      value ? ` ${stringify ? JSON.stringify(value) : value}` : ''
    }`.split(' ');

    this.log.info(`[Triggering] ${command} ${args.join(' ')}`);
    const log = await RedisLog.create({
      command,
      args,
      result: null
    });

    return new Promise<T>((res, reject) => {
      this.client.send_command(command, args, async (e, r) => {
        if (e) {
          this.log.info(e);
          log.result = e.message;
          await log.save();
          return reject(e);
        } else {
          log.result = r;
          await log.save();
          return res(r);
        }
      });
    });
  };

  public getNextPlayer = async (
    action: keyof typeof QueueTypes,
    value?: number | string
  ) => {
    const key = QueueTypes[action];
    let queueString = -1;

    if (value) {
      queueString = +(await this.json(
        value,
        key,
        RedisJsonActions.ARRINDEX,
        RedisService.DEFAULT_DOCUMENT_NAME
      ));
    }

    this.log.info(
      `[GetNextPlayer][${key}] Fetching Player from Redis Queue, expecting: ${value} at ${queueString}`
    );

    return await this.json(
      queueString >= 0 ? queueString : null,
      key,
      RedisJsonActions.ARRPOP,
      RedisService.DEFAULT_DOCUMENT_NAME,
      false
    );
  };

  public queuePlayer = async (
    action: keyof typeof QueueTypes,
    value: string | number
  ) => {
    const key = QueueTypes[action];
    const exists = await this.json(value, key, RedisJsonActions.ARRINDEX);

    this.log.info(
      `[GetNextPlayer][${key}] Queueing Player Into Redis Queue: ${value}`
    );
    if (+exists === -1) {
      return +(await this.json(value, key, RedisJsonActions.ARRAPPEND));
    }

    return exists;
  };

  public getRateLimitBucket = async () => {
    return +(await this.json(null, RedisKeys.RATE_LIMIT_KEY));
  };

  public updateRateLimit = async (value: number) => {
    const rateLimit = await this.json(null, RedisKeys.RATE_LIMIT_KEY, 'GET');

    if (+rateLimit <= 0 && value < 0) {
      throw new Error('Rate Limit is Still in Effect');
    }

    await this.json(
      value,
      RedisKeys.RATE_LIMIT_KEY,
      RedisJsonActions.NUMINCRBY,
      RedisService.DEFAULT_DOCUMENT_NAME,
      false
    );
  };
}
