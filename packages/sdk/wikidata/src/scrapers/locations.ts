/**
 * @packageDocumentation
 * @module WikiData
 * */
import { GenericApi } from '../api/generic';
import { IElement } from '../interfaces/IElement';
import { LocationConnections, MAP_PATH, TeleportLocations } from '../utils/constants';
import { CoreScraper } from './core';

export class LocationScraper extends CoreScraper {
	private genericApi: GenericApi;

	constructor(cache?) {
		super(cache);

		this.genericApi = new GenericApi();
	}

	public async getLocation({ name, href }: IElement, full = false) {
		const cachedValue = await this.cache.get(name);
		if (cachedValue) {
			return cachedValue;
		}
		const $ = await this.getPage(href);
		const materials = $('#mw-content-text > div > table:nth-child(5) > tbody')
			.find('tr')
			.toArray()
			.map((row) => {
				const $row = $(row);
				const item = this.getSimpleElement($, $row.find('td a'));
				const quantity = $row.find('td:nth-child(2)').text().trim();

				return [ item.name, { ...item, quantity } ];
			})
			.filter((arr) => arr[0] && arr[0] !== 'undefined');

		let drops;

		if (full) {
			try {
				drops = await this.genericApi.getItemsForArea(name);
			} catch (e) {
				console.error(e);
			}
		}

		const animals = $('#Animals')
			.parent()
			.nextUntil('table')
			.next()
			.find('tr')
			.toArray()
			.map((el) => {
				const $el = $(el);
				const animal = {
					name: $el.find('a').attr('title'),
					href: $el.find('a').attr('href'),
					quantity: $el.find('td:nth-child(2)').text().trim()
				};

				return [ animal.name, animal ];
			})
			.filter((arr) => arr[0] && arr[0] !== 'undefined');

		return {
			name,
			href,
			drops,
			animals: Object.fromEntries(animals),
			materials: Object.fromEntries(materials),
			teleport: TeleportLocations.includes(name),
			connections: LocationConnections[name]
		};
	}

	public async getAll(full = false) {
		const $ = await this.getPage(MAP_PATH);

		const locationPromises: Promise<any>[] = $('#mw-content-text > div > ul a')
			.toArray()
			.map((el) => this.getSimpleElement($, el))
			.map((el) => this.getLocation(el, full));

		const locations = await Promise.all(locationPromises);

		return Object.fromEntries(locations.map((loc) => [ loc.name, loc ]));
	}
}
