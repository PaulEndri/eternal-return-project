import { Abilities, Characters, WeaponTypes } from '../constants';
import { IAbility, ICharacter } from '../interfaces';

export class Character implements ICharacter {
	public name: string;
	public href: string;
	public image?: string;
	public description: string;
	public details: any[];
	public stats: {};
	public abilities: Record<Abilities, IAbility>;

	constructor(seed: Characters | ICharacter) {
		let source = seed;
		if (typeof seed === 'string') {
			if (!Characters[seed]) {
				throw new Error(`Invalid seed: ${seed}`);
			}

			source = Characters[seed];
		}

		Object.assign(this, source);
	}
}
