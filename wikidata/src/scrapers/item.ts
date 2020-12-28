/**
 * @packageDocumentation
 * @module WikiData
 * */
import { CoreScraper } from './core';
import {
	ARMOR_PATH,
	CONSUMABLE_PATH,
	MATERIAL_PATH,
	SPECIAL_PATH,
	WEAPON_PATH
} from '../utils/constants';
import { IWikiCache } from '../interfaces/IWikiCache';
import { IElement } from '../interfaces/IElement';
import { Item } from '../interfaces/Item';

export class ItemScraper extends CoreScraper {
	constructor(
		itemCache?: IWikiCache,
		private locationCache?: IWikiCache,
		private animalCache?: IWikiCache
	) {
		super(itemCache);
	}

	private injectDetailsToItems = async (items: Array<IElement | Array<any>>) => {
		for (const item of items) {
			if (Array.isArray(item)) {
				Object.assign(item[1], await this.getItem(item[1]));
			} else {
				Object.assign(item, await this.getItem(item));
			}
		}
	};

	public getDroppedFromAnimals = async (item: IElement): Promise<Record<string, IElement>> => {
		if (this.animalCache) {
			const animals = await this.animalCache.getAll();

			return Object.fromEntries(
				Object.entries(animals)
					.filter(([ , animal ]: any) => animal.items && animal.items[item.name])
					.map(([ name, animal ]: any) => [ name, { name, href: animal.href } ])
			);
		}

		return null;
	};

	public getFoundLocations = async (item: IElement): Promise<Record<string, IElement>> => {
		if (this.locationCache) {
			const locations = await this.locationCache.getAll();

			return Object.fromEntries(
				Object.entries(locations)
					.filter(
						([ , location ]: any) => location.materials && location.materials[item.name]
					)
					.map(([ name, location ]: any) => [ name, { name, href: location.href } ])
			);
		}

		return null;
	};

	public getItem = async (item: IElement) => {
		if (!item || !item.href) {
			console.log('Invalid Item', item);
			return null;
		}

		const cachedValue = await this.cache.get<Item>(item.name);

		if (cachedValue) {
			return cachedValue;
		}

		const $ = await this.getPage(item.href);
		const $infoTable = $('table.infoboxtable');
		const description = $infoTable.find('i').text().trim();
		const rarityIndex = description ? 6 : 5;
		const rarity = $infoTable
			.find(`tr:nth-child(${rarityIndex}) > td:nth-child(2) > div > div`)
			.text()
			.trim();
		const stats = $infoTable.find('ul li').toArray().map((el) => $(el).text().trim());
		const $stackable = $infoTable.find('tr > td > div:contains(Stackable)');
		const $defaultQuantity = $infoTable.find('tr > td > div:contains(Quantity)');
		const requirements = $('#Recipe')
			.parent()
			.nextUntil('table')
			.next()
			.find('a img')
			.parent()
			.toArray()
			.map((el) => this.getSimpleElement($, el, true))
			.filter((el) => el !== item.name && el);

		const buildsFrom = $('#Recipe')
			.parent()
			.nextUntil('table')
			.next()
			.find('tr:nth-child(5)')
			.find('a img')
			.parent()
			.toArray()
			.map((el) => this.getSimpleElement($, el, true));

		const buildsInto = $('#Builds_into')
			.parent()
			.nextUntil('table')
			.next()
			.find('td a')
			.toArray()
			.map((el) => this.getSimpleElement($, el, true))
			.filter((el) => el);

		const maxStacks = $stackable.length
			? $stackable.parent().next().text().trim().replace(/[^0-9]/g, '')
			: '1';
		const foundQuantity = $defaultQuantity.length
			? $defaultQuantity.parent().next().text().trim().replace(/[^0-9]/g, '')
			: '1';

		const foundLocations = await this.getFoundLocations(item);
		const droppedFrom = await this.getDroppedFromAnimals(item);

		return Object.assign({}, item, {
			requirements,
			buildsInto,
			buildsFrom,
			foundLocations,
			droppedFrom,
			rarity,
			stats,
			description,
			maxStacks,
			foundQuantity
		}) as Item;
	};

	/**
     * @param complete if true, also fetch details for each weapon
     */
	public getWeapons = async (complete = false) => {
		const $ = await this.getPage(WEAPON_PATH);
		const categories: Record<
			string,
			{
				name: string;
				weapons: string[] | Record<string, Item>;
				abilityDetails: any;
				usableBy: string[];
			}
		> = {};
		const toc = $('.toclevel-1 a').toArray();

		for (let el of toc) {
			const $el = $(el);
			const name = $el.attr('href').replace('#', '');
			const $h2 = $(`#${name}`).parent();
			const $usableBy = $h2.next().find('a').toArray();
			const $p = $h2.next('p');
			const $abilityDetails = $p.nextUntil('div').next().find('div.ability_details');
			const usableBy = $usableBy.map((el) => this.getSimpleElement($, el, true));

			const weapons = $p
				.nextUntil('div')
				.next()
				.find('table.wikitable td a img')
				.parent()
				.parent()
				.toArray()
				.map((weaponEl) =>
					this.getSimpleElement($, $(weaponEl).find('a:nth-child(1)'), !complete)
				)
				.filter((name) => name);

			if (complete) {
				await this.injectDetailsToItems(weapons);
			}

			const abilityDetails = {
				name: $abilityDetails.prev().attr('id'),
				description: $abilityDetails
					.find('table > tbody > tr:nth-child(3) > td:nth-child(3) > div > p')
					.text()
					.trim(),
				info: $abilityDetails.find('table.infoboxtable tr').toArray().map((detailEl) => ({
					title: $(detailEl).find('td:nth-child(1) > div').text().trim(),
					value: $(detailEl).find('td:nth-child(2)').text().trim()
				}))
			};

			categories[name.replace(/_/g, '').replace(/-/g, '').replace(/ /g, '')] = {
				name: name.replace(/_/g, ' '),
				weapons: complete
					? Object.fromEntries<Item>(
							weapons.map((wp) => {
								return [ wp.name, wp ];
							})
						)
					: [ ...new Set(weapons) ] as string[],
				abilityDetails,
				usableBy
			};
		}

		return categories;
	};

	/**
     * @param complete if true, also fetch details for each armor
     */
	public getArmors = async (complete = false) => {
		const $ = await this.getPage(ARMOR_PATH);
		const categories: Record<string, string[] | Record<string, Item>> = {};
		const toc = $('.toclevel-2 a').toArray();

		for (let el of toc) {
			const $el = $(el);
			const name = $el.attr('href').replace('#', '');
			const $h3 = $(`#${name}`).parent();
			const armors = $h3
				.next()
				.find('a')
				.toArray()
				.map((e) => this.getSimpleElement($, e, !complete));

			if (complete) {
				this.injectDetailsToItems(armors);
			}

			categories[name] = complete
				? Object.fromEntries<Item>(armors.map((armor) => [ armor.name, armor ]))
				: [ ...new Set(armors) ] as string[];
		}

		return categories;
	};

	/**
     * @param complete if true, also fetch details for each consumable item
     */
	public getConsumables = async (complete = false) => {
		const $ = await this.getPage(CONSUMABLE_PATH);
		const food = $('#mw-content-text > div > table:nth-child(4) a')
			.toArray()
			.map((el) => this.getSimpleElement($, el, !complete))
			.map((mat) => (complete ? [ mat.name, mat ] : mat));
		const drinks = $('#mw-content-text > div > table:nth-child(6) a')
			.toArray()
			.map((el) => this.getSimpleElement($, el, !complete))
			.map((mat) => (complete ? [ mat.name, mat ] : mat));

		const $special = await this.getPage(SPECIAL_PATH);
		const special = $special('#mw-content-text > div > table a')
			.toArray()
			.map((el) => this.getSimpleElement($, el, !complete))
			.map((mat) => (complete ? [ mat.name, mat ] : mat));

		if (complete) {
			await this.injectDetailsToItems(food);
			await this.injectDetailsToItems(special);
			await this.injectDetailsToItems(drinks);
		}

		return {
			food: complete ? Object.fromEntries(food) : [ ...new Set(food) ],
			beverage: complete ? Object.fromEntries(drinks) : [ ...new Set(drinks) ],
			summon: complete ? Object.fromEntries(special) : [ ...new Set(special) ]
		};
	};

	/**
     * @param complete if true, also fetch details for each material
     */
	public getMaterials = async (complete = false) => {
		const $ = await this.getPage(MATERIAL_PATH);
		const mats = $('#mw-content-text > div > table a')
			.toArray()
			.map((el) => this.getSimpleElement($, el, !complete));

		if (complete) {
			await this.injectDetailsToItems(mats);
		}

		return complete
			? Object.fromEntries(mats.map((mat) => [ mat.name, mat ]))
			: [ ...new Set(mats) ];
	};

	/**
     * @param complete if true, also fetch details for each item
     */
	public getAll = async (complete = false) => {
		const materials = await this.getMaterials(complete);
		const armors = await this.getArmors(complete);
		const weapons = await this.getWeapons(complete);
		const consumables = await this.getConsumables(complete);

		return {
			materials,
			armors,
			weapons,
			consumables
		};
	};
}
