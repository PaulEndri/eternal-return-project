import { Abilities } from '../constants/Abilities';
import { IAbility } from './IAbility';

export interface ICharacter {
	name: string;
	href: string;
	image?: string;
	description: string;
	details: any[];
	stats: {};
	abilities: Record<Abilities, IAbility>;
}
