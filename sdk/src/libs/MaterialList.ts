import { ILocation, IWeightedLocation } from '../interfaces/ILocation';
import { IMaterialList } from '../interfaces/IMaterialList';
import { Region } from './Region';

export class MaterialList {
	public list: IMaterialList = {};

	public constructor() {}

	public set(value, number = 0) {
		this.list[value] = number;
	}

	public add(value, number = 1) {
		if (!this.list[value]) {
			this.list[value] = 0;
		}

		this.list[value] = this.list[value] + number;

		return this.list[value];
	}

	public subtract(value, number = 1) {
		if (!this.list[value]) {
			this.list[value] = 0;
		} else {
			this.list[value] = this.list[value] - number;
		}

		return this.list[value];
	}

	public addFromList(list: IMaterialList) {
		Object.entries(list).forEach(([ key, val ]) => this.add(key, val));
	}

	public addFromLocationArray(locations: ILocation[]) {
		locations.forEach((location) =>
			Object.entries(location.materials).forEach(([ key, item ]) =>
				this.add(key, +item.quantity)
			)
		);
	}

	public addFromRegion(region: Region) {
		Object.entries(region.materialCount).forEach(([ key, val ]) => this.add(key, +val));
	}

	public addFromWeightedLocations(locations: IWeightedLocation[]) {
		locations
			.filter((loc) => loc)
			.forEach(({ simplifiedMaterials }) =>
				simplifiedMaterials.forEach(([ key, val ]) => this.add(key, +val))
			);
	}

	public clone() {
		const _list = new MaterialList();

		_list.list = { ...this.list };

		return _list;
	}
}
