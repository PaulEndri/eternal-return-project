import { Animals, Locations } from '../constants';
import { IElement } from '../interfaces/IElement';
import { IBasicItem } from '../interfaces/IBasicItem';
import { Items } from '../../../data/Items';
import { IMaterialList } from '../interfaces/IMaterialList';

const ITEM_CACHE = {} as any;

export class Item<T extends string> implements IElement, IBasicItem<T> {
	public href: string;
	public rarity: string;
	public stats: string[];
	public description: string;
	public maxStacks: string;
	public foundQuantity: string;
	public requirements?: Array<IBasicItem<string>>;
	public buildsInto?: Record<string, IBasicItem<string>>;
	public foundLocations?: Record<Locations, IBasicItem<Locations>>;
	public droppedFrom?: Record<Animals, IBasicItem<Animals>>;
	public buildsFrom?: Array<IElement>;

	private _materials: Record<string, number>;
	private _totalCount: number;
	private _byProducts: Record<string, IBasicItem<any>>;

	public get type() {
		return 'item';
	}

	constructor(public name: T) {
		if (ITEM_CACHE[name]) {
			return Object.assign({}, ITEM_CACHE[name]);
		}

		if (!name) {
			console.error('Herp derp', name);
			return null;
		}

		if (!Items[name]) {
			console.error('Need to go hunting for', name);
			throw new Error(`Need to go hunting for "${name}"`);
		}

		const {
			href,
			rarity,
			stats,
			description,
			maxStacks,
			foundQuantity,
			requirements,
			buildsInto,
			buildsFrom,
			foundLocations,
			droppedFrom
		} = Items[name] as IBasicItem<T>;

		Object.assign(this, {
			href,
			rarity,
			stats,
			buildsFrom,
			description,
			maxStacks: +maxStacks,
			foundQuantity: +foundQuantity,
			requirements: this.getAllItems(requirements),
			buildsInto: this.getAllItems(buildsInto),
			foundLocations: this.getAllItems(foundLocations),
			droppedFrom: this.getAllItems(droppedFrom)
		});

		ITEM_CACHE[name] = Object.assign({}, this);
	}

	private getAllItems(data: Record<string, IElement> | IElement[]) {
		if (Array.isArray(data)) {
			return data.map(({ name }) => Items[name]);
		} else {
			return Object.fromEntries(Object.keys(data).map((val) => [ val, Items[val] ]));
		}
	}

	public get materials(): IMaterialList {
		if (!this._materials) {
			const materials = {};

			this.requirements
				.filter((item) => item && item.requirements.length === 0)
				.forEach(({ name }) => {
					if (!materials[name]) {
						materials[name] = 0;
					}

					materials[name] = materials[name] + 1;
				});

			this._materials = materials;

			Object.keys(materials).forEach((mat) => {
				materials[mat] = materials[mat] / 2;
			});
		}

		return this._materials;
	}

	public get byProducts() {
		if (!this._byProducts) {
			const byProducts = {};

			this.requirements
				.filter((item) => item && item.requirements.length > 0)
				.forEach((item) => {
					if (!byProducts[item.name]) {
						byProducts[item.name] = item;
					}
				});

			this._byProducts = byProducts;
		}

		return this._byProducts;
	}

	public get totalMaterials() {
		if (!this._totalCount) {
			this._totalCount = Object.values(this.materials).reduce(
				(total: number, current: number) => total + current,
				0
			) as number;
		}

		return this._totalCount;
	}

	public get typeWeight() {
		return 1;
	}

	public get rarityWeight() {
		switch (this.rarity) {
			case 'Common':
				return 1;
			case 'Uncommon':
				return 2;
			case 'Rare':
				return 3;
			case 'Epic':
				return 4;
			case 'Legendary':
				return 5;
			default:
				return 0;
		}
	}

	public canComplete(materials: IMaterialList) {
		return Object.entries(this.materials).every(
			([ materialName, value ]) => materials[materialName] >= value
		);
	}
}
