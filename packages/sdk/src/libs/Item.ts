import {
	Animals,
	Locations,
	CategoriesLookup,
	Items as ItemsEnum,
	ItemsLookup
} from '../constants';
import { IElement } from '../interfaces/IElement';
import { IRawItem, IItem, IItemStats } from '../interfaces/IItem';
import { IMaterialList } from '../interfaces/IMaterialList';
import { Items } from 'erbs-data';

const ItemsArray = Object.values(Items);

const ITEM_CACHE = {} as any;

export class Item<A extends string = any, T extends string = any> implements IItem {
	public rarity: string;
	public stats: IItemStats;
	public description: string;
	public maxStacks: number;
	public foundQuantity: number;
	public airSupply: boolean;
	public collectible: number;
	public stackable: boolean;
	public requirements: IMaterialList;
	public buildsInto: IElement<ItemsEnum>[];
	public buildsFrom: IElement<ItemsEnum>[];
	public locations: Record<Partial<Locations>, number>;
	public droppedFrom: IElement<Animals>[];
	public id: string | number;
	public name: ItemsEnum;

	public category: CategoriesLookup;
	public apiType: A;
	public clientType: T;

	private _totalCount: number;

	static GetItem<A extends string = any, T extends string = any>(
		needle: ItemsEnum | ItemsLookup | IRawItem<A, T> | number | string
	) {
		let item: IRawItem<A, T>;

		if (!needle) {
			throw new Error('No valid item value provided');
		} else if (typeof needle === 'object') {
			item = needle;
		} else {
			item = ITEM_CACHE[needle];

			if (!item) {
				const searchedItem: any = ItemsArray.find(
					({ name, id }: any) => name === needle.toString() || id === needle
				);

				if (!searchedItem) {
					throw new Error(`Need to go fetching for ${needle}`);
				}

				ITEM_CACHE[needle] = searchedItem;
				item = searchedItem as IRawItem<A, T>;
			}
		}

		return item;
	}

	constructor(public needle: ItemsEnum | ItemsLookup | IRawItem<A, T> | number | string) {
		const item = Item.GetItem<A, T>(needle);

		if (!item) {
			throw new Error(`Missing Item ${needle}`);
		}

		const { apiMetaData, clientMetaData, href, ...rest } = item;

		Object.assign(this, {
			...rest
		});

		this.category = apiMetaData.category as CategoriesLookup;
		this.apiType = apiMetaData.type as A;
		this.clientType = clientMetaData.type as T;
	}

	public get materials(): IMaterialList {
		return this.requirements;
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
			case 'Legend':
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
