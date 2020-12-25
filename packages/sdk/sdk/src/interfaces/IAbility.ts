import { IStats } from './IStats';

export interface IAbility {
	name: string;
	slot: string;
	type: string;
	description: string;
	stats: Record<string, IStats>;
}
