import { Locations as LocationsEnum } from '../constants';
import { Locations } from '../data/Locations';
import { ILocation, ILocationDrop } from '../interfaces';

export class Region implements ILocation {
	public materials: Record<string, ILocationDrop>;
	public animals: Record<string, ILocationDrop>;
	public teleport: boolean;
	public connections: any[];
	public name: string;
	public href: string;
	public image?: string;

	private _materialCount: Record<string, number>;

	constructor(seed: LocationsEnum | ILocation) {
		let source = seed;
		if (typeof seed === 'string') {
			if (!LocationsEnum[seed]) {
				throw new Error(`Invalid seed: ${seed}`);
			}

			source = Locations[seed];
		}

		Object.assign(this, source);
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
		return this.connections.map((seed) => new Region(seed));
	}
}
