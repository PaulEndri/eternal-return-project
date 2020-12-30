import { Items } from '../constants';
import { LoadoutKeys } from '../constants/LoadoutKeys';
import { IItem } from '../interfaces/IItem';

export type Loadout = Record<LoadoutKeys, IItem>;
export type BasicLoadout = Record<LoadoutKeys, Items>;
