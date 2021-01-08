import {
  Weapons,
  Armors,
  Locations,
  Characters,
  Items,
  Animals
} from 'erbs-data';
import { setCacheSource } from '../libs/DataCache';

export const setStaticCache = () => {
  setCacheSource('Items', Items);
  setCacheSource('Weapons', Weapons);
  setCacheSource('Armors', Armors);
  setCacheSource('Locations', Locations);
  setCacheSource('Characters', Characters);
  setCacheSource('Animals', Animals);
};
