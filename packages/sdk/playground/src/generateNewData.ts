import { Accessory } from 'erbs-sdk';
import fs from 'fs';
import * as Scrapers from 'erbs-wiki-api';
import { CharacterScraper, LocationScraper, WikiCache } from 'erbs-wiki-api';
import GenericApi from 'erbs-wiki-api/dist/erbs/wikidata/src/api/generic';
import Complete from './generated/Complete.json';

const api = new GenericApi();
const animalScraper = new Scrapers.AnimalScraper();
const locationScraper = new LocationScraper(new WikiCache());
const characterScraper = new CharacterScraper();
const itemScraper = new Scrapers.ItemScraper(
	new WikiCache(),
	locationScraper['cache'],
	animalScraper['cache'],
	characterScraper['cache']
);

const methods = [
	animalScraper.getAll(),
	locationScraper.getAll(),
	characterScraper.getAll(),
	itemScraper.getWeapons(false),
	itemScraper.getArmors(false),
	itemScraper.getConsumables(false),
	itemScraper.getMaterials(false),
	api.getAllItems(true)
];

const writeFile = (name: string, content) => {
	fs.writeFileSync(`src/newGenerated/${name}.json`, JSON.stringify(content, null, 2));
};

Promise.all(methods)
	.then(
		async (
			[ Animals, Locations, Character, Weapons, Armors, Consumables, Materials, Items ]
		) => {
			const realCharacters = await characterScraper.getAll(Weapons);

			const Categories = {};

			Object.values(Items).forEach((item: any) => {
				if (!Categories[item.category]) {
					Categories[item.category] = [];
				}

				if (!Categories[item.category].includes(item.type)) {
					Categories[item.category].push(item.type);
				}

				try {
					item.description = Complete[item.name].description;
				} catch (e) {
					console.warn('[Missing Description or Error]', e);
                } 
                
                try {
                    Object.values(Animals).filter((animal: any) => animal.items[item.name])
                  }
			});

			const files = {
				Animals,
				Locations,
				Characters: realCharacters,
				Weapons,
				Armors,
				Consumables,
				Materials,
				Items,
				Categories
			};

			Object.entries(files).forEach(([ name, content ]) => writeFile(name, content));

			return files;
		}
	)
	.then(() => console.log('DONE BRO'));
