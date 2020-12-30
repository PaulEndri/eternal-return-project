export interface ItemElement {
	name: string | number;
	id: string | number;
}

export interface ItemClientMetaData {
	type: string;
	category: string;
}

export interface ItemApiMetaData {
	code?: number;
	category?: string;
	type?: string;
}

export interface ItemStats {
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

export interface Item {
	name: string | number;
	id: string | number;
	href?: string;
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
}

export default Item;
