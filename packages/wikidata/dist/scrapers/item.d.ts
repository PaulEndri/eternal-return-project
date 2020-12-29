/**
 * @packageDocumentation
 * @module WikiData
 * */
import { CoreScraper } from '../../src/scrapers/core';
import { IWikiCache } from '../../src/interfaces/IWikiCache';
import { IElement } from '../../src/interfaces/IElement';
import { Item } from '../../src/interfaces/Item';
export declare class ItemScraper extends CoreScraper {
	private locationCache?;
	private animalCache?;
	constructor(itemCache?: IWikiCache, locationCache?: IWikiCache, animalCache?: IWikiCache);
	private injectDetailsToItems;
	getDroppedFromAnimals: (item: IElement) => Promise<Record<string, IElement>>;
	getFoundLocations: (item: IElement) => Promise<Record<string, IElement>>;
	getItem: (item: IElement) => Promise<Item<IElement>>;
	/**
     * @param complete if true, also fetch details for each weapon
     */
	getWeapons: (
		complete?: boolean
	) => Promise<
		Record<
			string,
			{
				name: string;
				weapons: string[] | Record<string, Item>;
				abilityDetails: any;
				usableBy: string[];
			}
		>
	>;
	/**
     * @param complete if true, also fetch details for each armor
     */
	getArmors: (
		complete?: boolean
	) => Promise<Record<string, string[] | Record<string, Item<IElement>>>>;
	/**
     * @param complete if true, also fetch details for each consumable item
     */
	getConsumables: (
		complete?: boolean
	) => Promise<{
		food: {
			[k: string]: any;
		};
		beverage: {
			[k: string]: any;
		};
		summon: {
			[k: string]: any;
		};
	}>;
	/**
     * @param complete if true, also fetch details for each material
     */
	getMaterials: (
		complete?: boolean
	) => Promise<{
		[k: string]: any;
	}>;
	/**
     * @param complete if true, also fetch details for each item
     */
	getAll: (
		complete?: boolean
	) => Promise<{
		materials: {
			[k: string]: any;
		};
		armors: Record<string, string[] | Record<string, Item<IElement>>>;
		weapons: Record<
			string,
			{
				name: string;
				weapons: string[] | Record<string, Item>;
				abilityDetails: any;
				usableBy: string[];
			}
		>;
		consumables: {
			food: {
				[k: string]: any;
			};
			beverage: {
				[k: string]: any;
			};
			summon: {
				[k: string]: any;
			};
		};
	}>;
}
//# sourceMappingURL=item.d.ts.map
