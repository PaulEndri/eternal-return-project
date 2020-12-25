import { Items } from '../../../data/Items';
import { Locations as LocationsData } from '../data/Locations';
import { Locations as LocationsEnum, Materials, Bats, WeaponsEnum } from '../constants';
import { Accessory } from './Accessory';
import { Arm } from './Arm';
import { Chest } from './Chest';
import { Head } from './Head';
import { Leg } from './Leg';
import { Weapon } from './Weapon';
import { IBasicLoadout } from '../interfaces/ILoadout';
import { ILocation, IWeightedLocation } from '../interfaces/ILocation';
import { IMaterialList } from '../interfaces/IMaterialList';
import { MaterialList } from './MaterialList';
import { IBasicItem } from '../interfaces/IBasicItem';
import { Item } from './Item';

export class Loadout {
	private _totalMaterials: Record<string, number>;
	private _totalCount: number;
	private _regions: Record<LocationsEnum, ILocation>;
	private _weightedRegions: Record<LocationsEnum, IWeightedLocation>;
	private _byProducts: Record<string, IBasicItem<any>>;

	constructor(
		private chest: Chest,
		private arm: Arm,
		private legs: Leg,
		private head: Head,
		private weapon: Weapon,
		private accessory: Accessory
	) {}

	static GenerateLoadout(data: IBasicLoadout) {
		return new Loadout(
			new Chest(data.Chest),
			new Arm(data.Arm),
			new Leg(data.Leg),
			new Head(data.Head),
			new Weapon(data.Weapon),
			new Accessory(data.Accessory)
		);
	}

	public get starterItem() {
		return this.weapon.starter as WeaponsEnum;
	}

	public get items() {
		return [ this.chest, this.weapon, this.accessory, this.arm, this.legs, this.head ];
	}

	public get materials(): IMaterialList {
		if (!this._totalMaterials) {
			const totalMaterials = {};

			this.items.forEach(({ requirements }) =>
				requirements.filter((x) => x).forEach((req) => {
					if (!totalMaterials[req.name]) {
						totalMaterials[req.name] = 0;
					}

					totalMaterials[req.name] += 1;
				})
			);

			totalMaterials[this.weapon.starter] = 1;
			this._totalMaterials = totalMaterials;
		}

		return this._totalMaterials;
	}

	public get byProducts(): Record<string, IBasicItem<any>> {
		if (!this._byProducts) {
			const _byProducts = {};
			this.items.map(({ byProducts }) =>
				Object.entries(byProducts).forEach(([ key, item ]) => (_byProducts[key] = item))
			);

			this._byProducts = _byProducts;
		}

		return this._byProducts;
	}

	public get totalMaterials(): number {
		if (!this._totalCount) {
			this._totalCount = Object.values(this.materials).reduce(
				(total: number, current: number) => total + current,
				0
			) as number;
		}

		return this._totalCount;
	}

	public get regions(): Record<LocationsEnum, ILocation> {
		if (!this._regions) {
			const materials = this.materials;
			const regions: Record<LocationsEnum, ILocation> = {} as any;
			const excludedMats: string[] = [ Materials.Stone, Materials.Leather, Bats.Branch ];

			Object.keys(materials)
				.filter((mat) => mat && Items[mat] && !excludedMats.includes(mat))
				.forEach((mat) => {
					const material = Items[mat];

					Object.keys(material.foundLocations).forEach((location) => {
						if (!regions[location]) {
							regions[location] = LocationsData[location];
						}
					});
				});

			this._regions = regions;

			return regions;
		}

		return this._regions;
	}

	public get weightedRegions(): Record<LocationsEnum, IWeightedLocation> {
		const regions = this.regions;

		if (!this._weightedRegions) {
			const weightedRegions = Object.fromEntries(
				Object.entries(regions).map(([ regionName, region ]) => {
					const materialList = new MaterialList();
					const regionMaterials = Object.entries(region.materials).filter(
						([ materialName ]) => this.materials[materialName] > 0
					);
					const baseRegionCount = regionMaterials.reduce(
						(previous: number, [ material, value ]) => {
							materialList.add(material, +value.quantity);

							return previous + this.getRegionItemWeight(material, +value.quantity);
						},
						0
					);

					const byProductsBuilt = Object.entries(this.byProducts)
						.filter(([ name ]) => {
							const item = new Item(name);

							return item.canComplete(materialList.list);
						})
						.concat(
							this.checkCompletedItems(materialList.list).map((item) => [
								item.name,
								item
							])
						);

					return [
						regionName as LocationsEnum,
						{
							name: regionName,
							byProductsBuilt: Object.fromEntries(byProductsBuilt),
							value: this.getRegionWeight(
								baseRegionCount,
								byProductsBuilt.length,
								region.teleport
							),
							materials: Object.fromEntries(regionMaterials),
							connections: region.connections,
							teleport: region.teleport,
							simplifiedMaterials: regionMaterials.map(([ name, drop ]) => [
								name,
								drop.quantity
							])
						} as IWeightedLocation
					];
				})
			);

			this._weightedRegions = weightedRegions as Record<LocationsEnum, IWeightedLocation>;
		}

		return this._weightedRegions;
	}

	public checkCompletedItems(materials: IMaterialList) {
		return this.items.filter((item) => item.canComplete(materials));
	}

	public checkCompletedByProducts(materials: IMaterialList) {
		return Object.keys(this.byProducts).filter((item) => new Item(item).canComplete(materials));
	}

	private getRegionItemWeight(name: string, value) {
		return +value / this.materials[name];
	}

	private getRegionWeight(baseValue: number, byProductsCompleted: number, canTeleport: boolean) {
		return baseValue * (byProductsCompleted / 10 + 1) * (canTeleport ? 1.1 : 1);
	}
}
