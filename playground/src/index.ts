import { generateData } from './generateData';
import { generateEnums } from './generateEnums';
import { generateMasterData } from './generateMasterData';
import { generateNewData } from './generateNewData';
import { generateObjects } from './generateObjects';
import { getClientData } from './getClientData';

const SWITCHES = {
  DATA: false,
  NEW_DATA: false,
  CLIENT_DATA: false,
  MASTER_DATA: false,
  OBJECTS: true,
  ENUMS: true
};

const main = async () => {
  console.log('[Beginning Generation with Options]', SWITCHES);

  if (SWITCHES.DATA) {
    console.log('[Generating Wiki Data]');
    await generateData();
    console.log('[Generated Wiki Data]');
  }

  if (SWITCHES.NEW_DATA) {
    console.log('[Generating New Data]');
    await generateNewData();
    console.log('[Generated New Data]');
  }

  if (SWITCHES.CLIENT_DATA) {
    console.log('[Generating Client Data]');
    await getClientData();
    console.log('[Generated Client Data]');
  }

  if (SWITCHES.MASTER_DATA) {
    console.log('[Generating Master Data]');
    await generateMasterData();
    console.log('[Generated Master Data]');
  }

  if (SWITCHES.OBJECTS) {
    console.log('[Generating Objects]');
    await generateObjects();
    console.log('[Generated Objects]');
  }

  if (SWITCHES.ENUMS) {
    console.log('[Generating Enums]');
    await generateEnums();
    console.log('[Generated Enums]');
  }

  return 'ok';
};

main()
  .then(() => console.log('[Done]'))
  .catch((e) => console.error(e));
