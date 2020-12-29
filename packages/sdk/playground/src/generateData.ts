import { Accessory } from 'erbs-sdk';
import fs from 'fs';
import { CharacterScraper, LocationScraper, WikiCache } from 'erbs-wiki-api';

const animalScraper = new Scrapers.AnimalScraper();
const locationScraper = new LocationScraper(new WikiCache());
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
		const items = (await itemScraper.getAll(true)) as any;
		const allItems = {
			...items.materials,
			...items.consumables.drink,
			...items.consumables.food,
			...items.consumables.special,
			...items.armors.Head,
			...items.armors.Chest,
			...items.armors.Arm,
			...items.armors.Leg,
			...items.armors.Accessory,
			...items.weapons.Dagger.weapons,
			...items.weapons['Two-Handed_Sword'].weapons,
			...items.weapons.Axe.weapons,
			...items.weapons.Dual_Swords.weapons,
			...items.weapons.Pistol.weapons,
			...items.weapons.Assault_Rifle.weapons,
			...items.weapons.Sniper_Rifle.weapons,
			...items.weapons.Rapier.weapons,
			...items.weapons.Spear.weapons,
			...items.weapons.Hammer.weapons,
			...items.weapons.Bat.weapons,
			...items.weapons.Throw.weapons,
			...items.weapons.Shuriken.weapons,
			...items.weapons.Bow.weapons,
			...items.weapons.Crossbow.weapons,
			...items.weapons.Tonfa.weapons,
			...items.weapons.Glove.weapons,
			...items.weapons.Nunchaku.weapons,
			...items.weapons.Whip.weapons
		};

		const files = {
			Animals: animals,
			Locations: locations,
			Character: characters,
			Armor: items.armors,
			Material: items.materials,
			Consumable: items.consumables,
			Weapons: items.weapons,
			Items: items,
			Complete: allItems
		};

		Object.entries(files).forEach(([ name, content ]) => writeFile(name, content));

		return files;
	})
	.then(() => console.log('DONE BRO'));
