import fs from 'fs';
import {
  CharacterScraper,
  LocationScraper,
  AnimalScraper,
  ItemScraper,
  WikiCache
} from 'erbs-wiki-api';

export const generateData = () => {
  const animalScraper = new AnimalScraper();
  const locationScraper = new LocationScraper(new WikiCache());
  const characterScraper = new CharacterScraper();
  const itemScraper = new ItemScraper(
    new WikiCache(),
    locationScraper['cache'],
    animalScraper['cache']
  );

  const methods = [
    animalScraper.getAll(),
    locationScraper.getAll(),
    characterScraper.getAll(),
    characterScraper.getCharacter({ name: 'Xiukai', href: '/Xiukai' }),
    characterScraper.getCharacter({ name: 'Emma', href: '/Emma' }),
    characterScraper.getCharacter({ name: 'Lenox', href: '/Lenox' }),
    characterScraper.getCharacter({ name: 'Rozzi', href: '/Rozzi' })
  ];

  const writeFile = (name: string, content) => {
    fs.writeFileSync(
      `src/generated/classic/${name}.json`,
      JSON.stringify(content, null, 2).replace(
        /Bloody Nine Tails/g,
        'Whip of Nine Bloody Tails'
      )
    );
  };

  return Promise.all(methods).then(
    async ([animals, locations, characters, Xiukai, Emma, Lenox, Rozzi]) => {
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
        ...items.armors.Accessory
      };

      Object.values(items.weapons).forEach(({ weapons }) =>
        Object.assign(allItems, weapons)
      );
      delete characters.xiuaki;
      characters.Xiukai = Xiukai;
      characters.Emma = Emma;
      characters.Lenox = Lenox;
      characters.Rozzi = Rozzi;

      Object.keys(items.weapons.Nunchaku.weapons).forEach(([key]) => {
        if (items.weapons.Whip.weapons[key]) {
          delete items.weapons.Nunchaku.weapons[key];
        }
      });

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

      Object.entries(files).forEach(([name, content]) =>
        writeFile(name, content)
      );

      return files;
    }
  );
};
