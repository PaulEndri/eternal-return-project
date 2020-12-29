import { IAbility } from '../../src/interfaces/IAbility';
export interface ICharacter {
	name: string;
	href: string;
	image?: string;
	description: string;
	details: any[];
	stats: {};
	abilities: Record<string, IAbility>;
	weapons: string[];
}
//# sourceMappingURL=ICharacter.d.ts.map
