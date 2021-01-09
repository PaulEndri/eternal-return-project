import { Animals, Categories, CategoriesLookup, Locations } from '../constants';
import { IElement } from './IElement';
import { NamedMaterialList } from './IMaterialList';

export interface IItemClientMetaData<T extends string = any> {
  name?: string;
  type: T;
  category: Categories;
}

export interface IItemApiMetaData<T extends string = any> {
  name?: string;
  code?: number;
  category?: CategoriesLookup;
  type?: T;
}

export interface IItemStats {
  attackPower?: number;
  moveSpeed?: number;
  moveSpeedOutOfCombat?: number;
  cooldownReduction?: number;
  hpRegen?: number;
  increaseBasicAttackDamage?: number;
  increaseSkillDamage?: number;
  attackSpeedRatio?: number;
  maxHp?: number;
  hpRegenRatio?: number;
  sightRange?: number;
  spRegen?: number;
  lifeSteal?: number;
  criticalChance?: number;
  decreaseRecoveryToSkill?: number;
  increaseSkillDamageRatio?: number;
  attackRange?: number;
  decreaseRecoveryToBasicAttack?: number;
  spRegenRatio?: number;
  defense?: number;
  charges?: number;
  criticalStrikeDamage?: number;
  maxSp?: number;
  preventSkillDamagedRatio?: number;
  preventBasicAttackDamaged?: number;
  spRestore?: number;
  heal?: number;
}

export interface IItem extends IElement {
  rarity: string;
  stats: IItemStats;
  displayName?: string;
  description: string;
  maxStacks: number;
  foundQuantity: number;
  stackable: boolean;
  airSupply: boolean;
  collectible: number;
  requirements?: NamedMaterialList;
  buildsInto?: IElement[];
  buildsFrom?: IElement[];
  locations?: Record<Partial<Locations>, number>;
  droppedFrom?: IElement<keyof typeof Animals>[];
}

export interface IRawItem<A extends string = any, T extends string = any>
  extends IItem {
  apiMetaData: IItemApiMetaData<A>;
  clientMetaData: IItemClientMetaData<T>;
  href?: string;
}
