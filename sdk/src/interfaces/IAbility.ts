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

export interface IStats {
	'Skill damage'?: IStat;
	'Move. speed'?: IStat;
	'Skill duration'?: IStat;
	Range?: IStat;
	'Casting time'?: IStat;
	Cost?: IStat;
	Cooldown?: IStat;
	Health?: IStat;
	Slow?: IStat;
	Regen?: IStat;
	'AP Increase'?: IStat;
	Defense?: IStat;
	Stun?: IStat;
	'Attack speed'?: IStat;
	'Debuff duration'?: IStat;
	'Num. of hits'?: IStat;
	'Area of effect'?: IStat;
	Knockback?: IStat;
}

export interface IAbility {
	name: string;
	slot: string;
	type: string;
	description: string;
	stats: Record<string, IStats>;
}
