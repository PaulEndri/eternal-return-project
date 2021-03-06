import fs from 'fs';
import * as Scrapers from 'erbs-wiki-api';
import {
  CharacterScraper,
  LocationScraper,
  WikiCache,
  GenericApi
} from 'erbs-wiki-api';
import Complete from './generated/classic/Complete.json';

export const generateNewData = () => {
  const api = new GenericApi();
  const animalScraper = new Scrapers.AnimalScraper();
  const locationScraper = new LocationScraper(new WikiCache());
  const characterScraper = new CharacterScraper();
  const itemScraper = new Scrapers.ItemScraper(
    new WikiCache(),
    locationScraper['cache'],
    animalScraper['cache']
  );

  const methods = [
    animalScraper.getAll(),
    locationScraper.getAll(),
    itemScraper.getWeapons(false),
    itemScraper.getArmors(false),
    itemScraper.getConsumables(false),
    itemScraper.getMaterials(false),
    api.getAllItems(true),
    characterScraper.getAll()
  ];

  const writeFile = (name: string, content) => {
    fs.writeFileSync(
      `src/generated/newGenerated/${name}.json`,
      JSON.stringify(content, null, 2).replace(/Full Body Swimsuit/g, 'Wetsuit')
    );
  };

  return Promise.all(methods).then(
    async ([
      Animals,
      Locations,
      Weapons,
      Armors,
      Consumables,
      Materials,
      Items
    ]) => {
      const realCharacters = await characterScraper.getAll(Weapons);
      const missingCharacters = ['Xiukai', 'Emma', 'Lenox', 'Rozzi'];

      for (const character of missingCharacters) {
        const charData: any = await characterScraper.getCharacter({
          name: character,
          href: `/${character}`
        });

        charData.weapons = Object.entries(Weapons)
          .filter(([, type]: any) => type.usableBy.includes(character))
          .map(([key]) => key);

        realCharacters[character] = charData;
      }
      delete realCharacters.Xiuaki;
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
          Object.values(Animals).filter(
            (animal: any) => animal.items[item.name]
          );
        } catch (e) {
          console.log(e);
        }
      });

      Weapons.Whip.weapons = Weapons.Whip.weapons.filter(
        (x) => x !== 'Bloody Nine Tails'
      );

      Weapons.Whip.weapons.push('Whip of Nine Bloody Tails');

      Weapons.Nunchaku.weapons = Weapons.Nunchaku.weapons.filter(
        (x) =>
          x !== 'Bloody Nine Tails' ||
          !Weapons.Whip.weapons.some((y) => y === x)
      );

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

      Object.entries(files).forEach(([name, content]) => {
        if (name === 'Weapons') {
          // Bloody Nine Tails
          writeFile(name, content);
        } else {
          writeFile(name, content);
        }
      });

      return files;
    }
  );
};
