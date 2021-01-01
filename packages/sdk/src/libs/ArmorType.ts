import { Armors } from 'erbs-data';
import { IElement } from '../interfaces';
import { IArmorType } from '../interfaces/IArmorType';
import { Item } from './Item';

const ArmorTypesArray = Object.values(Armors);

export class ArmorType implements IArmorType {
	public name: string;
	public abilityDetails: { name?: string; description: string; info: Record<string, string>[] };
	public usableBy: string[];
	public items: IElement<any>[];
	public apiMetaData: { type: string; name: string; category: string };

	private loadedArmors;

	static GetArmorType(seed: string) {
		return ArmorTypesArray.find(
			({ name, apiMetaData }) =>
				name === seed || apiMetaData.name === seed || apiMetaData.type === seed
		);
	}

	static GetArmorsForType(seed: string) {
		try {
			this.GetArmorType(seed).items.map(({ id }) => new Item(id));
		} catch (e) {
			console.error('FAILED TO GET WEAPONS FOR TYPE', e);
			throw e;
		}
	}

	constructor(seed: string) {
		const type = ArmorType.GetArmorType(seed);

		if (!type) {
			throw new Error(`Invalid Seed ${seed}`);
		}

		Object.assign(this, type);
	}

	public loadArmors() {
		if (!this.loadedArmors) {
			this.loadedArmors = this.items.map(({ id }) => new Item(id));
		}

		return this.loadedArmors;
	}
}
