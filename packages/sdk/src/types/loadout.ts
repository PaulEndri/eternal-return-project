import { Items } from '../constants';
import { LoadoutKeys } from '../constants/LoadoutKeys';
import { IItem } from '../interfaces/IItem';

export type Loadout = Record<keyof typeof LoadoutKeys, IItem>;
export type BasicLoadout = Record<keyof typeof LoadoutKeys, Items>;
