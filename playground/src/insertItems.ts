import { Items } from './models/sql.models';
import ItemData from './generated/masterData/items.json';
const main = async () => {
  for (const {
    id,
    name,
    clientMetaData: { type }
  } of ItemData) {
    console.log('[Adding Id]', id);

    await Items.query().insert({
      id,
      name,
      type
    } as any);
  }
};
main().then(() => console.log('[done]'));
