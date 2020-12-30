/**
 * @packageDocumentation
 * @module WikiData
 * */
import { IAnimal } from '../interfaces/IAnimal';
import { IElement } from '../interfaces/IElement';
import { ANIMAL_PATH } from '../utils/constants';
import { CoreScraper } from './core';

export class AnimalScraper extends CoreScraper {
	public getAnimal = async ({ name, href }: IElement) => {
		const cachedValue = await this.cache.get<IAnimal>(name);
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

				return [ location.name, quantity ];
			})
			.filter((arr) => arr[0] && arr[0] !== 'undefined');

		const drops = $('#mw-content-text > div > table:nth-child(9) > tbody')
			.find('tr')
			.toArray()
			.map((el) => {
				const item = this.getSimpleElement($, $(el).find('td a'));
				const rarity = $(el).find('td:nth-child(2)').text().trim();
				const percentage = $(el).find('td:nth-child(3)').text().trim();

				return [ item.name, { name: item.name, rarity, percentage } ];
			})
			.filter((arr) => arr[0] && arr[0] !== 'undefined');

		return {
			name,
			href,
			locations: Object.fromEntries(locations),
			items: Object.fromEntries(drops)
		} as IAnimal;
	};

	public getAll = async () => {
		const $ = await this.getPage(ANIMAL_PATH);

		const animalPromises: Promise<any>[] = $('#mw-content-text > div > ul a')
			.toArray()
			.map((el) => this.getSimpleElement($, el))
			.map((el) => this.getAnimal(el));

		const animals = await Promise.all(animalPromises);

		return Object.fromEntries<IAnimal>(animals.map((anim) => [ anim.name, anim ]));
	};
}
