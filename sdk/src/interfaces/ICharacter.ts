import { Characters, WeaponsLookup } from '../constants';
import { IAbility } from './IAbility';
import { IElement } from './IElement';

export interface ICharacterAttribute {
	mastery: WeaponsLookup;
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
	criticalStrikeChance: number;
	hpRegen: number;
	spRegen: number;
	attackSpeed: number;
	moveSpeed: number;
	sightRange: number;
}

export interface ICharacter extends IElement<Characters> {
	attributes: ICharacterAttribute[];
	description: string;
	details: Record<string, string>;
	stats: {
		initial: ICharacterInitialStat;
		perLevel: ICharacterLevelUpStat;
	};
	abilities: Record<string, IAbility>;
	weapons: WeaponsLookup[];
}
