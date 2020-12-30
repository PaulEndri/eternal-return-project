import { Locations as LocationsEnum, Items } from '../constants';
import LocationsData from '../data/locations.json';
import { IElement, ILocation, ILocationEntity } from '../interfaces';
import { MaterialList } from './MaterialList';

export class Region implements ILocation {
	public materials = new MaterialList();
	public drops: ILocationEntity[];
	public animals: ILocationEntity[];
	public teleport: boolean;
	public connections: IElement<LocationsEnum>[];
	public apiMetaData?: { type: string; code: number; name: string };
	public name: LocationsEnum;
	public id: string | number;

	private _materialCount: Record<string, number>;

	constructor(seed: LocationsEnum | ILocation) {
		let source = seed;
		if (typeof seed === 'string') {
			if (!LocationsEnum[seed]) {
				throw new Error(`Invalid seed: ${seed}`);
			}

			source = LocationsData[seed];
		}

		Object.assign(this, source);

		this.drops.forEach(({ name, quantity }) => {
			this.materials.add(name as Items, +quantity);
		});
	}

	get materialCount() {
		if (!this._materialCount) {
			const materialCount = {};

			Object.entries(this.materials).forEach(([ materialName, info ]) => {
				materialCount[materialName] = +info.quantity;
			});

			this._materialCount = materialCount;
		}

		return this.materialCount;
	}

	public loadConnections() {
		return this.connections.map((seed) => new Region(seed.name));
	}
}
