import { Characters, WeaponsLookup } from '../constants';
import { IElement } from './IElement';

export interface ITiers {
  1?: string;
  2?: string;
  3?: string;
  4?: string;
  5?: string;
}

export interface IStat {
  title: string;
  value: string;
  tiers: ITiers;
}

export interface IAbility {
  name: string;
  slot: string;
  type: string;
  description: string;
  stats: Record<string, IStat>;
}

export interface ICharacterAttribute {
  mastery: keyof typeof WeaponsLookup | string;
  controlDifficulty: number;
  attack: number;
  defense: number;
  disruptor: number;
  move: number;
  assistance: number;
}

export interface ICharacterLevelUpStat {
  maxHp: number;
  maxSp: number;
  attackPower: number;
  defense: number;
  criticalChance: number;
  hpRegen: number;
  spRegen: number;
  attackSpeed: number;
  moveSpeed: number;
}

export interface ICharacterInitialStat {
  maxHp: number;
  maxSp: number;
  initExtraPoint: number;
  maxExtraPoint: number;
  attackPower: number;
  defense: number;
  criticalChance: number;
  hpRegen: number;
  spRegen: number;
  attackSpeed: number;
  moveSpeed: number;
  sightRange: number;
}

export interface ICharacter extends IElement<keyof typeof Characters | string> {
  displayName?: string;
  background?: string;
  attributes?: ICharacterAttribute[];
  description?: string;
  details?: Record<string, string>;
  stats: {
    initial: ICharacterInitialStat;
    perLevel: ICharacterLevelUpStat;
  };
  abilities?: Record<string, IAbility>;
  weapons?: (keyof typeof WeaponsLookup | string)[];
  apiMetaData?: any;
}
