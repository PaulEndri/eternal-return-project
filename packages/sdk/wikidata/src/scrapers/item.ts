import { CoreScraper } from './core';
import { IBasicItem, IElement, ILocation, ICache } from 'erbs-sdk';
import {
	ARMOR_PATH,
	CONSUMABLE_PATH,
	MATERIAL_PATH,
	SPECIAL_PATH,
	WEAPON_PATH
} from '../utils/constants';

export class ItemScraper extends CoreScraper {
	constructor(
		itemCache?: ICache,
		private locationCache?: ICache,
		private animalCache?: ICache,
		private characterCache?: ICache
	) {
		super(itemCache);
	}

	private async injectDetailsToItems(items: Array<IElement | Array<any>>) {
		for (const item of items) {
			if (Array.isArray(item)) {
				Object.assign(item[1], await this.getItem(item[1]));
			} else {
				Object.assign(item, await this.getItem(item));
			}
		}
	}

	public async getDroppedFromAnimals(item: IElement): Promise<Record<string, IElement>> {
		if (this.animalCache) {
			const animals = await this.animalCache.getAll();

			return Object.fromEntries(
				Object.entries(animals)
					.filter(([ name, animal ]: any) => animal.items && animal.items[item.name])
					.map(([ name, animal ]: any) => [ name, { name, href: animal.href } ])
			);
		}

		return null;
	}

	public async getFoundLocations(item: IElement): Promise<Record<string, IElement>> {
		if (this.locationCache) {
			const locations = await this.locationCache.getAll<ILocation>();

			return Object.fromEntries(
				Object.entries(locations)
					.filter(
						([ name, location ]: any) =>
							location.materials && location.materials[item.name]
					)
					.map(([ name, location ]: any) => [ name, { name, href: location.href } ])
			);
		}

		return null;
	}

	public async getItem<T extends IBasicItem<any>>(item: IElement): Promise<T> {
		if (!item || !item.href) {
			console.log('Invalid Item', item);
			return null;
		}

		const cachedValue = await this.cache.get(item.name);
		if (cachedValue) {
			console.log('[testing cache]', cachedValue);
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
			.map((el) => this.getSimpleElement($, el))
			.filter((el) => el.name !== item.name && el.name);

		const buildsFrom = $('#Recipe')
			.parent()
			.nextUntil('table')
			.next()
			.find('tr:nth-child(5)')
			.find('a img')
			.parent()
			.toArray()
			.map((el) => this.getSimpleElement($, el));

		const buildsInto = $('#Builds_into')
			.parent()
			.nextUntil('table')
			.next()
			.find('td a')
			.toArray()
			.map((el) => this.getSimpleElement($, el))
			.filter((el) => el.name)
			.map((el) => [ el.name, el ]);

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
			buildsInto: Object.fromEntries(buildsInto),
			buildsFrom,
			foundLocations,
			droppedFrom,
			rarity,
			stats,
			description,
			maxStacks,
			foundQuantity
		}) as T;
	}

	/**
     * @param complete if true, also fetch details for each weapon
     */
	public async getWeapons(complete = false) {
		const $ = await this.getPage(WEAPON_PATH);
		const categories = {};
		const toc = $('.toclevel-1 a').toArray();

		for (let el of toc) {
			const $el = $(el);
			const name = $el.attr('href').replace('#', '');
			const $h2 = $(`#${name}`).parent();
			const $usableBy = $h2.next().find('a').toArray();
			const $p = $h2.next('p');
			const $abilityDetails = $p.nextUntil('div').next().find('div.ability_details');
			const usableBy = $usableBy.map((el) => this.getSimpleElement($, el));

			const weapons = $p
				.nextUntil('div')
				.next()
				.find('table.wikitable td a img')
				.parent()
				.parent()
				.toArray()
				.map((weaponEl) => this.getSimpleElement($, $(weaponEl).find('a:nth-child(1)')))
				.filter(({ name }) => name);

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

			categories[name] = {
				name,
				weapons: Object.fromEntries(
					weapons.map((wp) => {
						return [ wp.name, wp ];
					})
				),
				abilityDetails,
				usableBy
			};
		}

		return categories;
	}

	/**
     * @param complete if true, also fetch details for each armor
     */
	public async getArmors(complete = false) {
		const $ = await this.getPage(ARMOR_PATH);
		const categories = {};
		const toc = $('.toclevel-2 a').toArray();

		for (let el of toc) {
			const $el = $(el);
			const name = $el.attr('href').replace('#', '');
			const $h3 = $(`#${name}`).parent();
			const armors = $h3
				.next()
				.find('a')
				.toArray()
				.map((e) => this.getSimpleElement($, e))
				.map((armor) => [ armor.name, armor ]);

			if (complete) {
				this.injectDetailsToItems(armors);
			}

			categories[name] = Object.fromEntries(armors);
		}

		return categories;
	}

	/**
     * @param complete if true, also fetch details for each consumable item
     */
	public async getConsumables(complete = false) {
		const $ = await this.getPage(CONSUMABLE_PATH);
		const food = $('#mw-content-text > div > table:nth-child(4) a')
			.toArray()
			.map((el) => this.getSimpleElement($, el))
			.map((mat) => [ mat.name, mat ]);
		const drinks = $('#mw-content-text > div > table:nth-child(6) a')
			.toArray()
			.map((el) => this.getSimpleElement($, el))
			.map((mat) => [ mat.name, mat ]);

		const $special = await this.getPage(SPECIAL_PATH);
		const special = $('#mw-content-text > div > table a')
			.toArray()
			.map((el) => this.getSimpleElement($, el))
			.map((special) => [ special.name, special ]);

		if (complete) {
			await this.injectDetailsToItems(food);
			await this.injectDetailsToItems(special);
			await this.injectDetailsToItems(drinks);
		}

		return {
			food: Object.fromEntries(food),
			drink: Object.fromEntries(drinks),
			special: Object.fromEntries(special)
		};
	}

	/**
     * @param complete if true, also fetch details for each material
     */
	public async getMaterials(complete = false) {
		const $ = await this.getPage(MATERIAL_PATH);
		const mats = $('#mw-content-text > div > table a')
			.toArray()
			.map((el) => this.getSimpleElement($, el))
			.map((mat) => [ mat.name, mat ]);

		if (complete) {
			await this.injectDetailsToItems(mats);
		}

		return Object.fromEntries(mats);
	}

	/**
     * @param complete if true, also fetch details for each item
     */
	public async getAll(complete = false) {
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
	}
}
