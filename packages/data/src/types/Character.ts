export interface Stat {
	title: string;
	value: string;
	tiers: Record<string, string>;
}

export interface Ability {
	name: string;
	slot: string;
	type: string;
	description: string;
	stats: Record<string, Stat>;
}

export interface CharacterAttribute {
	mastery: string;
	controlDifficulty: number;
	attack: number;
	defense: number;
	disruptor: number;
	move: number;
	assistance: number;
}

export interface CharacterLevelUpStat {
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

export interface CharacterInitialStat {
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

export interface Character {
	name: string;
	id: string | number;
	attributes?: CharacterAttribute[];
	description?: string;
	details?: Record<string, string>;
	stats: {
		initial: CharacterInitialStat;
		perLevel: CharacterLevelUpStat;
	};
	abilities?: Record<string, Ability>;
	weapons?: string[];
	apiMetaData?: any;
}

export default Character;
