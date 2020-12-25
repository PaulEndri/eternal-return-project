import { Weapons, WeaponsEnum, WeaponTypes } from '../constants';
import { WEIGHTS } from '../constants/Weights';
import { Item } from './Item';

export class Weapon extends Item<WeaponsEnum> {
	static StarterWeapons = {
		Axe: 'Hatchet',
		Dagger: 'Kitchen Knife',
		TwoHandedSword: 'Rusty Sword',
		Glove: 'Cotton Gloves',
		Tonfa: 'Bamboo',
		Bat: 'Short Rod',
		Hammer: 'Hammer',
		Whip: 'Whip',
		Throw: 'Baseball',
		Shuriken: 'Razor',
		Bow: 'Bow',
		Crossbow: 'Short Crossbow',
		Rapier: 'Needle',
		Spear: 'Short Spear',
		Guitar: 'Starter Guitar',
		Pistol: 'Walther PPK',
		AssaultRifle: 'Fedorova',
		SniperRifle: 'Long Rifle',
		Nunchaku: 'Steel Chain'
	};

	private _type: WeaponTypes;

	public get type() {
		if (!this._type) {
			for (const [ key, value ] of Object.entries(Weapons)) {
				if (value[this.name]) {
					this._type = WeaponTypes[key];
				}
			}
		}

		return this._type;
	}

	public get starter() {
		return Weapon.StarterWeapons[this.type];
	}

	public get typeWeight() {
		return WEIGHTS.EQUIPMENT.WEAPON;
	}
}
