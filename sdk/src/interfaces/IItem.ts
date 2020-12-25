import { Animals, Categories, CategoriesLookup, Locations, Items } from '../constants';
import { IElement } from './IElement';
import { IMaterialList } from './IMaterialList';

export interface IItemClientMetaData<T extends string = any> {
	type: T;
	category: Categories;
}

export interface IItemApiMetaData<T extends string = any> {
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
	criticalStrikeChance?: number;
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

export interface IItem extends IElement<Items> {
	rarity: string;
	stats: IItemStats;
	description: string;
	maxStacks: number;
	foundQuantity: number;
	airSupply: boolean;
	collectible: number;
	requirements?: IMaterialList;
	buildsInto?: IElement<Items>[];
	buildsFrom?: IElement<Items>[];
	locations?: Record<Partial<Locations>, number>;
	droppedFrom?: IElement<Animals>[];
}

export interface IRawItem<A extends string = any, T extends string = any> extends IItem {
	apiMetaData: IItemApiMetaData<A>;
	clientMetaData: IItemClientMetaData<T>;
}