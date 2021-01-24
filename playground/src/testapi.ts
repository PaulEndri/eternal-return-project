import { ErBsClient } from 'erbs-client';
import dotenv from 'dotenv';

dotenv.config();

const test = new ErBsClient();

test.getPlayerNumber('ParadoxZeroe').then((x) => {
  console.log('[test]', x);
});
