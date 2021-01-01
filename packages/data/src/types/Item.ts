export type ItemElement = {
	name: string | number;
	id: string | number;
};

export type ItemClientMetaData = {
	type: string;
	category: string;
};

export type ItemApiMetaData = {
	code?: number;
	category?: string;
	type?: string;
};

export type ItemStats = {
	attackPower?: number | string;
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
};

export type Item = {
	name: string;
	code?: number | string;
	id: number;
	href?: string;
	displayName: string | number;
	rarity: string;
	stats: ItemStats;
	stackable: boolean;
	description?: string;
	maxStacks: number;
	foundQuantity: number;
	airSupply: boolean;
	collectible: number;
	requirements?: Record<string, number>;
	buildsInto?: ItemElement[];
	buildsFrom?: ItemElement[];
	locations?: Record<string, number>;
	droppedFrom?: ItemElement[];
	apiMetaData: ItemApiMetaData;
	clientMetaData: ItemClientMetaData;
};

export default Item;
