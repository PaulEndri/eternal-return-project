import { HandlerService } from './services/handler.service';
import { RedisService } from './services/redis.service';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Players } from './models/player.model';
import { QueueTypes } from './types/queueTypes';
import { Core } from './libs/core';
import { IPlayer } from './types/player';
import fs from 'fs';

dotenv.config();

const FREE_SYNC = false;
mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

class App extends Core {
  private players: Pick<IPlayer, 'id'>[];
  private handler = new HandlerService();
  private redis = new RedisService();

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

          await this.redis.queuePlayer(processingOrder[i + 1], nextValue);
        }

        return valueToProcess;
      }
    }
  };

  start = async () => {
    this.log.info('Started');
    this.players = await Players.find({}, 'id', { lean: true });
    this.log.info('Built Player Queue');
  };

  next = async () => {
    this.log.info('Beginning Next Cycle');
    const redisVal = await this.getNextFromRedis();

    if (!redisVal && FREE_SYNC) {
      this.log.info('No Redis Value found, pulling from player queue');
      const nextPlayer = this.players.pop();
      this.log.info(`[Player][${nextPlayer.id}] Is Next`);
      await this.handler.getSeasonalStatsForPlayer(nextPlayer.id);
      nextPlayer;
      await this.redis.queuePlayer('games', nextPlayer.id);
    }
  };
}

const app = new App();

app
  .start()
  .then(() => {
    setInterval(() => app.next(), 1100);
  })
  .catch((e) => {
    fs.writeFile(`logs-${new Date().toTimeString()}`, e, () => {
      console.error(e);
      process.exit(0);
    });
  });
