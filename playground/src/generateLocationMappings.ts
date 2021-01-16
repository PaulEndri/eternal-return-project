/* tslint-disable */
import { Nodes } from './models/node.model';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AllPerms from './generated/perms.json';

dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const processor = async () => {
  console.log('[starting]', (AllPerms as any).length);
  for (let perm of AllPerms as any[]) {
    await Nodes.create(perm);

    perm = null;
  }
};

processor().then(() => {
  console.log('done');
});
