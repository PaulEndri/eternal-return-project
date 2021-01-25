import { Document, model, Model, Schema } from 'mongoose';

interface RedisLogDocument extends Document {
  timestamp?: Date;
  command: string;
  args: string[];
  result: string;
}

const RedisLogSchema: Schema<RedisLogDocument> = new Schema({
  timestamp: Schema.Types.Date,
  command: Schema.Types.String,
  args: [Schema.Types.String],
  result: Schema.Types.String
});

RedisLogSchema.pre('save', function (next) {
  if (!this.timestamp) {
    const now = new Date();

    this.timestamp = now;
  }

  next();
});

export const RedisLog: Model<RedisLogDocument> = model<RedisLogDocument>(
  'redisLog',
  RedisLogSchema
);
