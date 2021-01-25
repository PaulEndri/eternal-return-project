import { HandlerService } from './services/handler.service';
import { RedisService } from './services/redis.service';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { QueueTypes } from './types/queueTypes';
import { Core } from './libs/core';
import fs from 'fs';
import { Player } from './models/sql.models';

dotenv.config();

const FREE_SYNC = false;
mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

class App extends Core {
  private players: number[];
  private handler = new HandlerService();
  private redis = new RedisService();

  populateLocal = async () => {
    const wait3 = () => {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    };
    console.log('[Main] Fetching Ranked Duos');
    const res = await this.handler['client'].getTopDuos(1);
    await wait3();
    console.log('[Main] Fetching Ranked Solos');
    const res2 = await this.handler['client'].getTopSolos(1);
    await wait3();
    console.log('[Main] Fetching Ranked Squads');
    const res3 = await this.handler['client'].getTopSquads(1);
    await wait3();
    console.log('[Main] Fetching Unranked Duos');
    const res4 = await this.handler['client'].getTopDuos(1);
    await wait3();
    console.log('[Main] Fetching Unranked Solos');
    const res5 = await this.handler['client'].getTopSolos(1);
    await wait3();
    console.log('[Main] Fetching Unranked Squads');
    const res6 = await this.handler['client'].getTopSquads(1);
    await wait3();

    console.log('[Main] Fetched All Top');
    const topIds = [res, res2, res3, res4, res5, res6]
      .flat()
      .map(({ userNum }) => userNum);

    const players = await Player.query().select('id');
    console.log('[Main] Fetched All Players');

    return [...new Set(topIds.concat(players.map((p) => p.id)))];
  };

  getNextFromRedis = async () => {
    const processingOrder: (keyof typeof QueueTypes)[] = [
      'names',
      'numbers',
      'games'
    ];

    for (let i = 0; i < processingOrder.length; i++) {
      const process = processingOrder[i];
      const valueToProcess = await this.redis.getNextPlayer(process);
      let nextValue;

      this.log.info(`[Process][${process}] Found ${valueToProcess}`);
      if (valueToProcess) {
        switch (process) {
          case 'names':
            nextValue = await this.handler.getNumber(valueToProcess);
            break;
          case 'numbers':
            await Promise.all([
              this.handler.getSeasonalStatsForPlayer(+valueToProcess, 0),
              this.handler.getSeasonalStatsForPlayer(+valueToProcess, 1)
            ]);

            nextValue = valueToProcess;
            break;
          case 'games':
            await this.handler.getMatchesForPlayer(+valueToProcess);
            break;
          default:
            break;
        }

        if (nextValue && i !== processingOrder.length - 1) {
          this.log.info(
            `[Process][${processingOrder[i + 1]}] Queueing ${nextValue}`
          );

          await this.redis.queuePlayer(processingOrder[i + 1], +nextValue);
        }

        return valueToProcess;
      }
    }
  };

  start = async () => {
    this.log.info('Started');
    this.players = await this.populateLocal();
    this.log.info('Built Player Queue');
  };

  next = async () => {
    this.log.info('Beginning Next Cycle');
    const redisVal = await this.getNextFromRedis();

    if (!redisVal && FREE_SYNC) {
      this.log.info('No Redis Value found, pulling from player queue');
      const nextPlayer = this.players.pop();
      this.log.info(`[Player][${nextPlayer}] Is Next`);
      await this.handler.getSeasonalStatsForPlayer(nextPlayer);
      await this.redis.queuePlayer('games', nextPlayer);
    }
  };
}

const app = new App();

app
  .start()
  .then(() => {
    setInterval(() => app.next(), 2100);
  })
  .catch((e) => {
    fs.writeFile(`logs-${new Date().toTimeString()}`, e, () => {
      console.error(e);
      process.exit(0);
    });
  });
