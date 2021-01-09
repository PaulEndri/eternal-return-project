import { Characters, Weapons, WeaponsLookup } from '../constants';
import { IElement } from './IElement';

export interface IWeaponType {
  name: Weapons | string;
  abilityDetails: {
    name?: string;
    description: string;
    info: Array<Record<string, string>>;
  };
  usableBy: (keyof typeof Characters | string)[];
  items: IElement[];
  apiMetaData: {
    type: WeaponsLookup | string;
    name: Weapons | string;
    category: 'Weapon';
  };
}
