import fs from "fs";
import * as Scrapers from "erbs-wiki-api";
import { CharacterScraper, LocationScraper, WikiCache, GenericApi } from "erbs-wiki-api";
import Complete from "./generated/classic/Complete.json";

export const generateNewData = () => {
  const api = new GenericApi();
  const animalScraper = new Scrapers.AnimalScraper();
  const locationScraper = new LocationScraper(new WikiCache());
  const characterScraper = new CharacterScraper();
  const itemScraper = new Scrapers.ItemScraper(
    new WikiCache(),
    locationScraper["cache"],
    animalScraper["cache"]
  );

  const methods = [
    animalScraper.getAll(),
    locationScraper.getAll(),
    itemScraper.getWeapons(false),
    itemScraper.getArmors(false),
    itemScraper.getConsumables(false),
    itemScraper.getMaterials(false),
    api.getAllItems(true),
    characterScraper.getAll(),
  ];

  const writeFile = (name: string, content) => {
    fs.writeFileSync(`src/generated/newGenerated/${name}.json`, JSON.stringify(content, null, 2));
  };

  return Promise.all(methods).then(
    async ([Animals, Locations, Weapons, Armors, Consumables, Materials, Items]) => {
      const realCharacters = await characterScraper.getAll(Weapons);
      const Xiukai = await characterScraper.getCharacter({ name: "Xiukai", href: "/Xiukai" });
      const Emma = await characterScraper.getCharacter({ name: "Emma", href: "/Emma" });

      Xiukai.weapons = Object.entries(Weapons)
        .filter(([, type]: any) => type.usableBy.includes("Xiukai"))
        .map(([key]) => key);

      Emma.weapons = Object.entries(Weapons)
        .filter(([, type]: any) => type.usableBy.includes("Xiukai"))
        .map(([key]) => key);

      delete realCharacters.Xiuaki;
      realCharacters.Xiukai = Xiukai;
      realCharacters.Emma = Emma;
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
          console.warn("[Missing Description or Error]", e);
        }

        try {
          Object.values(Animals).filter((animal: any) => animal.items[item.name]);
        } catch (e) {
          console.log(e);
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
        Categories,
      };

      Object.entries(files).forEach(([name, content]) => writeFile(name, content));

      return files;
    }
  );
};
