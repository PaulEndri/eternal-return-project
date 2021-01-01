import { Weapons } from 'erbs-data';
import { IElement } from '../interfaces';
import { IWeaponType } from '../interfaces/IWeaponType';
import { Item } from './Item';

const WeaponTypesArray = Object.values(Weapons);

export class WeaponType implements IWeaponType {
	public name: string;
	public abilityDetails: { name?: string; description: string; info: Record<string, string>[] };
	public usableBy: string[];
	public items: IElement<any>[];
	public apiMetaData: { type: string; name: string; category: 'Weapon' };

	private loadedWeapons;

	static GetWeaponType(seed: string) {
		return WeaponTypesArray.find(
			({ name, apiMetaData }) =>
				name === seed || apiMetaData.name === seed || apiMetaData.type === seed
		);
	}

	static GetWeaponsForType(seed: string) {
		try {
			this.GetWeaponType(seed).items.map(({ id }) => new Item(id));
		} catch (e) {
			console.error('FAILED TO GET WEAPONS FOR TYPE', e);
			throw e;
		}
	}
	constructor(seed: string) {
		const type = WeaponType.GetWeaponType(seed);

		if (!type) {
			throw new Error(`Invalid Seed ${seed}`);
		}

		Object.assign(this, type);
	}

	public loadWeapons() {
		if (!this.loadedWeapons) {
			this.loadedWeapons = this.items.map(({ id }) => new Item(id));
		}

		return this.loadedWeapons;
	}
}
