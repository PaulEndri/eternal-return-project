import { ANIMAL_PATH } from '../utils/constants';
import { IAnimalDrop, IElement } from 'erbs-sdk';
import { CoreScraper } from './core';

export class AnimalScraper extends CoreScraper {
	public async getAnimal({ name, href }: IElement) {
		const cachedValue = await this.cache.get(name);
		if (cachedValue) {
			return cachedValue;
		}

		const $ = await this.getPage(href);
		const locations = $('#mw-content-text > div > table:nth-child(6) > tbody')
			.find('tr')
			.toArray()
			.map((el) => {
				const location = this.getSimpleElement($, $(el).find('td a'));
				const quantity = $(el).find('td:nth-child(2)').text().trim();

				return [ location.name, { ...location, quantity } ];
			})
			.filter((arr) => arr[0]);

		const drops = $('#mw-content-text > div > table:nth-child(9) > tbody')
			.find('tr')
			.toArray()
			.map((el) => {
				const item = this.getSimpleElement($, $(el).find('td a'));
				const rarity = $(el).find('td:nth-child(2)').text().trim();
				const percentage = $(el).find('td:nth-child(3)').text().trim();

				return [ item.name, { ...item, rarity, percentage } as IAnimalDrop ];
			})
			.filter((arr) => arr[0]);

		return {
			name,
			href,
			locations: Object.fromEntries(locations),
			items: Object.fromEntries(drops)
		};
	}

	public async getAll() {
		const $ = await this.getPage(ANIMAL_PATH);

		console.log('[test]', $);
		const animalPromises: Promise<any>[] = $('#mw-content-text > div > ul a')
			.toArray()
			.map((el) => this.getSimpleElement($, el))
			.map((el) => this.getAnimal(el));

		const animals = await Promise.all(animalPromises);

		return Object.fromEntries(animals.map((anim) => [ anim.name, anim ]));
	}
}