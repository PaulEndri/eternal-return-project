import { IAbility } from './IAbility';

export interface ICharacter {
	name: string;
	href: string;
	image?: string;
	description: string;
	background?: string;
	details: any[];
	stats: {};
	abilities: Record<string, IAbility>;
	weapons: string[];
}
