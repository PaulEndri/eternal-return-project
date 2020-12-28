import fetch from 'node-fetch';
import { IGenericItem } from '../interfaces/IGenericItem';
import { WikICache } from '../utils/wikiCache';
import { Locations } from '../utils/constants';

export class GenericApi {
	static BASE_URL = 'http://api.playeternalreturn.com';
	static ROUTES = {
		ALL_ITEMS: '/aesop/item/all',
		LOCATION_ITEMS: '/aesop/area?areaName={areaName}'
	};

	private itemCache = new WikICache();
	private locationCache = new WikICache();

	private getAllRequirements = (
		needles: string[],
		cache: Record<string, IGenericItem>,
		results = {}
	) => {
		needles.forEach((itemName) => {
			if (!itemName || !cache[itemName]) {
				console.warn('[Unknown Item]', itemName);
				return;
			} else if (cache[itemName].Material1 === '') {
				if (results[itemName]) {
					results[itemName]++;
				} else {
					results[itemName] = 1;
				}
			} else {
				this.getAllRequirements(
					[ cache[itemName].Material1, cache[itemName].Material2 ],
					cache,
					results
				);
			}
		});

		return results;
	};

	public getAllItems = async (full = false, force = false) => {
		if (this.itemCache.getCount() > 0 && !force) {
			return await this.itemCache.getAll();
		}

		let itemLocations = {};

		if (full) {
			await this.getAllLocationItems();
			const locationData = await this.locationCache.getAll();

			Object.entries(locationData).forEach(([ location, items ]) => {
				Object.entries(items).forEach(([ item, count ]) => {
					if (!itemLocations[item]) {
						itemLocations[item] = {};
					}

					itemLocations[item][location] = count;
				});
			});
		}

		const response = await fetch(`${GenericApi.BASE_URL}${GenericApi.ROUTES.ALL_ITEMS}`);
		const results: IGenericItem[] = await response.json();

		const items = Object.fromEntries(results.map((item) => [ item.Name, item ]));
		const returnedItems = {} as any;

		for (const item of results) {
			const {
				Material1,
				Material2,
				Name,
				Grade,
				ItemCategory,
				ItemType,
				InitialCount,
				Stackable,
				...Stats
			} = item;

			const buildsFrom = [ Material1, Material2 ].filter((mat) => mat !== '');
			const buildsInto = results
				.filter(({ Material1, Material2 }) => Material1 === Name || Material2 === Name)
				.map(({ Name }) => Name);
			const requirements = this.getAllRequirements(buildsFrom, items);
			const finalStats = Object.fromEntries(
				Object.entries(Stats)
					.filter(([ , val ]) => val !== '')
					.map(([ [ first, ...rest ], val ]) => [
						`${first.toLowerCase()}${rest.join('')}`,
						val
					])
			);

			const data = {
				name: Name,
				href: `/${Name.replace(/ /g, '_')}`,
				buildsFrom,
				buildsInto,
				requirements,
				stats: finalStats,
				rarity: Grade,
				type: ItemType,
				category: ItemCategory,
				stackable: Stackable > 1,
				maxStacks: Stackable,
				locations: itemLocations[Name] || {},
				foundQuantity: InitialCount
			};

			returnedItems[Name] = data;

			await this.itemCache.set(Name, data);
		}

		return returnedItems;
	};

	public getItemsForArea = async (areaName: string) => {
		if (await this.locationCache.get(areaName)) {
			return this.locationCache.get(areaName);
		}

		const response = await fetch(
			`${GenericApi.BASE_URL}${GenericApi.ROUTES.LOCATION_ITEMS.replace(
				'{areaName}',
				areaName
			)}`
		);
		const results = await response.json();
		const data = Object.fromEntries(
			results.map(({ DropCount, ItemName }) => [ ItemName, DropCount ])
		);

		await this.locationCache.set(areaName, data);

		return data;
	};

	public getItem = async (itemName: string) => {
		await this.getAllItems();

		return await this.itemCache.get(itemName);
	};

	public getAllLocationItems = async () => {
		if (this.locationCache.getCount() !== Object.keys(Locations).length) {
			for (const key of Object.keys(Locations)) {
				await this.getItemsForArea(key);
			}
		}

		return await this.locationCache.getAll();
	};
}
