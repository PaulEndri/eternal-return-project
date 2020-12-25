import { MAP_PATH } from '../utils/constants';
import { IElement, ILocation, ILocationDrop } from 'erbs-sdk';
import { CoreScraper } from './core';

export class LocationScraper extends CoreScraper {
	public async getLocation({ name, href }: IElement) {
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

				return [ item.name, { ...item, quantity } as ILocationDrop ];
			})
			.filter((arr) => arr);

		const animals = $('#mw-content-text > div > table:nth-child(9) > tbody')
			.find('tr')
			.toArray()
			.map((row) => {
				const $row = $(row);
				const animal = this.getSimpleElement($, $row.find('td a'));
				const quantity = $row.find('td:nth-child(2)').text().trim();

				return [ animal.name, { ...animal, quantity } as ILocationDrop ];
			})
			.filter((arr) => arr);

		return {
			name,
			href,
			materials: Object.fromEntries(materials),
			animals: Object.fromEntries(animals),
			teleport: false, // TODO
			connections: [] // TODO
		};
	}

	public async getAll() {
		const $ = await this.getPage(MAP_PATH);

		const locationPromises: Promise<ILocation>[] = $('#mw-content-text > div > ul a')
			.toArray()
			.map((el) => this.getSimpleElement($, el))
			.map((el) => this.getLocation(el));

		const locations = await Promise.all(locationPromises);

		return Object.fromEntries(locations.map((loc) => [ loc.name, loc ]));
	}
}
