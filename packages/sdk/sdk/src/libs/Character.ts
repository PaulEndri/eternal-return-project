import { Abilities, Characters, WeaponTypes } from '../constants';
import { Weapons } from '../data/Weapons';
import { IAbility, ICharacter } from '../interfaces';

export class Character implements ICharacter {
	public name: string;
	public href: string;
	public image?: string;
	public description: string;
	public details: any[];
	public stats: {};
	public abilities: Record<Abilities, IAbility>;

	private _weapons: WeaponTypes[] = [];

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

	public get weapons() {
		if (!this._weapons) {
			this._weapons = Object.entries(Weapons)
				.filter(([ weaponType, weaponData ]) =>
					weaponData.usableBy.some(({ name }) => name === this.name)
				)
				.map(([ weaponType ]) => weaponType as WeaponTypes);
		}

		return this._weapons;
	}
}
