export type AnimalStats = {
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
};

export type AnimalDrop = {
	name: string;
	percentage: number;
	rarity: string;
};

export type Animal = {
	name: string;
	id: string | number;
	locations: Record<string, number>;
	items: AnimalDrop[];
	stats: AnimalStats;
	displayName: string;
	apiName: string;
	apiMetaData: {
		resource: string;
		dropGroup: number;
		grade: string;
		name: string;
		code: number;
	};
};

export default Animal;
