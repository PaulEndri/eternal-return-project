import { Accessory } from 'erbs-sdk';
import fs from 'fs';
import { CharacterScraper, ItemScraper, LocationScraper, WikiCache } from 'erbs-wiki-api';

const animalScraper = new Scrapers.AnimalScraper();
const locationScraper = new LocationScraper();
const characterScraper = new CharacterScraper();
const itemScraper = new Scrapers.ItemScraper(
	new WikiCache(),
	locationScraper['cache'],
	animalScraper['cache'],
	characterScraper['cache']
);

const methods = [ animalScraper.getAll(), locationScraper.getAll(), characterScraper.getAll() ];

const writeFile = (name: string, content) => {
	fs.writeFileSync(`src/generated/${name}.json`, JSON.stringify(content, null, 2));
};

Promise.all(methods)
	.then(async ([ animals, locations, characters ]) => {
		const missingData = [ 'Baseball' ];

		const results = await Promise.all(
			missingData.map((item) => itemScraper.getItem({ name: item, href: `/${item}` }))
		);

		writeFile('missingItems', Object.fromEntries(results.map((item) => [ item.name, item ])));
	})
	.then(() => console.log('DONE BRO'));
