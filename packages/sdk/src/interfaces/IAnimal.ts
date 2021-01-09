import { Animals, Locations, Items } from '../constants';
import { IElement } from './IElement';

export interface IAnimalStats {
  createTime: number;
  regenTime: number;
  maxHp: number;
  attackPower: number;
  defense: number;
  attackSpeed: number;
  moveSpeed: number;
  sightRange: number;
  attackRange: number;
  firstAttackRange: number;
  aggressive: string;
  radius: number;
  uiHeight: number;
  gainExp: number;
  randomDropCount: number;
}

export interface IAnimalDrop {
  name: Items;
  percentage: number;
  rarity: string;
}

export interface IAnimal extends IElement<keyof typeof Animals> {
  locations: Record<Partial<keyof typeof Locations>, number>;
  items: IAnimalDrop[];
  stats: IAnimalStats;
  displayName: string;
  apiName: string;
  apiMetaData: {
    resource: string;
    dropGroup: number;
    grade: string;
    name: string;
    code: number;
  };
}
