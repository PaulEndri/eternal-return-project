import Animals from './generated/newGenerated/Animals.json';
import animals from './generated/clientData/animals.json';
import Items from './generated/newGenerated/Items.json';
import weapons from './generated/clientData/weapons.json';
import armors from './generated/clientData/armors.json';
import misc from './generated/clientData/misc.json';
import special from './generated/clientData/special.json';
import consumables from './generated/clientData/consumables.json';
import {
  enTranslations,
  krTranslations,
  rawTranslations
} from './krTranslations';
import Characters from './generated/newGenerated/Characters.json';
import characters from './generated/clientData/characters.json';
import Armors from './generated/newGenerated/Armors.json';
import Weapons from './generated/newGenerated/Weapons.json';
import lootLogic from './generated/clientData/howToFind.json';
import Locations from './generated/newGenerated/Locations.json';
import locationSpawns from './generated/clientData/spawns.json';
// import ClassicItemData from './generated/classic/Complete.json';

import fs from 'fs';
import { sanitizeItemString } from 'erbs-utilities';

export const generateMasterData = () => {
  const masterAnimals = [];
  const masterItems = [];
  const keyedItems = {};

  let missingTranslations = {};
  const missingItems = new Set();

  let allItemKeys = Object.keys(Items);
  const ItemKeyLookupArray = [];
  const ItemIdLookup = {};
  allItemKeys.map((key) => {
    ItemIdLookup[Items[key].code];

    ItemKeyLookupArray.push(
      [key, Items[key].code],
      [Items[key].code, key],
      [sanitizeItemString(key), Items[key].code]
    );
  });
  const ItemKeyLookups = Object.fromEntries(ItemKeyLookupArray);

  const replacers = (replace = false, stringifiedData: string) => {
    if (!replace) {
      return stringifiedData;
    }

    return stringifiedData
      .replace(/Full Body Swimsuit/g, 'Wetsuit')
      .replace(/Wild Dog/g, 'Dog')
      .replace(/Bloody Nine Tails/g, 'Whip of the Nine Bloody Tails');
  };

  const writeFile = (name: string, content, replace = false) => {
    fs.writeFileSync(
      `src/generated/masterData/${name}.json`,
      replacers(replace, JSON.stringify(content, null, 2))
    );
  };

  const generateAnimals = () => {
    Object.values(Animals).forEach(({ href, ...animal }) => {
      let title;

      switch (animal.name) {
        case 'Bat (Animal)':
          title = 'Bat';
          break;
        case 'Dog':
          title = 'WildDog';
          break;
        case 'Wickeline':
          title = 'Wickline';
          break;
        default:
          title = animal.name;
          break;
      }

      const {
        resource,
        dropGroup,
        grade,
        monster,
        code,
        ...clientAnimal
      } = Object.values(animals).find(({ monster }) => monster === title);

      if (animal.locations) {
        Object.keys(animal.locations).forEach(
          (key) => (animal.locations[key] = +animal.locations[key])
        );
      }

      let items;

      if (animal.items) {
        items = Object.values(animal.items).map(
          ({ name, percentage, rarity }) => ({
            name,
            percentage: +percentage,
            rarity
          })
        );
      }

      if (items) {
        masterAnimals.push({
          id: code,
          ...animal,
          stats: clientAnimal,
          displayName: animal.name,
          apiName: title,
          apiMetaData: {
            resource,
            dropGroup,
            grade,
            name: title,
            code
          },
          items
        });
      }
    });

    writeFile('animals', masterAnimals);

    return masterAnimals;
  };

  const getItemData = (
    itemArr: any[],
    apiTypeKey = 'type',
    apiCode = 'code',
    apiName = 'name'
  ) => {
    itemArr.forEach((item) => {
      const name = item[apiName];
      const enName = enTranslations[name];
      const apiType = item[apiTypeKey];
      const id = item[apiCode];
      let data = enName ? Items[enName] : Items[name];

      if ([name, enName].includes('Full Body Swimsuit')) {
        data = Items.Wetsuit;
      }
      if (!data && id) {
        data = ItemIdLookup[id];
      }

      if (data) {
        allItemKeys = allItemKeys.filter(
          (key) => key !== enName && key !== name
        );

        const { href, type, category, buildsFrom, ...rest } = data;

        masterItems.push({
          id,
          ...rest,
          code: item.name,
          buildsFrom: buildsFrom.map((item) =>
            item === 'Blueprints'
              ? 'Blueprint'
              : item === 'Full Body Swimsuit'
              ? 'Wetsuit'
              : item
          ),
          name: sanitizeItemString(rest.name),
          displayName: rest.name,
          apiMetaData: {
            code: id,
            category: item.itemType,
            type: apiType
          },
          clientMetaData: {
            type,
            category
          }
        });

        return;
      }

      missingTranslations[name] = {
        ...item,
        code: id,
        type: apiType
      };
    });
  };

  const linkMasterItems = () => {
    masterItems.forEach((item) => {
      item.droppedFrom = [];
      item.airSupply = false;
      item.collectible = 0;

      item.buildsFrom = item.buildsFrom.map((itemName) => {
        let foundItem = ItemKeyLookups[itemName];

        if (!foundItem) {
          foundItem = masterItems.find(
            ({ name }) => sanitizeItemString(itemName) === name
          );
        } else {
          foundItem = masterItems.find(({ id }) => id === foundItem);
        }

        if (!foundItem || typeof foundItem.id === 'string') {
          missingItems.add(itemName);
        }

        return {
          name: itemName,
          id: foundItem ? foundItem.id : null
        };
      });

      item.buildsInto = item.buildsInto.map((itemName) => {
        let foundItem = ItemKeyLookups[itemName];
        const name = itemName;
        let id;

        if (!foundItem) {
          foundItem = masterItems.find(
            ({ name, displayName }) =>
              sanitizeItemString(itemName) === name ||
              sanitizeItemString(itemName).toLowerCase() ===
                name.toLowerCase() ||
              displayName === itemName ||
              sanitizeItemString(itemName).toLowerCase() ===
                sanitizeItemString(displayName).toLowerCase()
          );

          if (!foundItem || typeof foundItem.id === 'string') {
            console.log('[Failed to find BuildInto]', { itemName });

            missingItems.add(itemName);
          } else {
            id = foundItem.id;
          }
        } else {
          id = foundItem;
        }

        return {
          name,
          id
        };
      });

      const canBeLooted = lootLogic.find(
        ({ itemCode }) => itemCode === item.id
      );

      if (canBeLooted) {
        Object.entries(canBeLooted).forEach(([key, val]) => {
          if (key.indexOf('hunt') >= 0 && val === 1) {
            const animalName = key.replace('hunt', '');
            const animalData = masterAnimals.find(
              ({ apiMetaData }) => apiMetaData.name === animalName
            );
            const id = animalData ? animalData.id : animalName;

            item.droppedFrom.push({ name: animalName, id });
          } else if (key === 'collectibleCode') {
            item.collectible = val;
          } else if (key === 'airSupply') {
            item.airSupply = !!val;
          }
        });
      }
    });
  };

  const generateItems = () => {
    getItemData(weapons, 'weaponType');
    getItemData(armors, 'armorType');
    getItemData(consumables, 'consumableType');
    getItemData(misc, 'miscItemType');
    getItemData(special, 'specialItemType');

    writeFile('generatedEnTranslations', enTranslations);
    writeFile('generatedRawTranslations', rawTranslations);
    writeFile('generatedKrTranslations', krTranslations);

    // while (allItemKeys.length > 0) {
    // 	const remainingItemName = allItemKeys.pop();

    for (const remainingItemName of allItemKeys) {
      // console.log(`[Trying to find "${remainingItemName}"]`);

      const { type, category, href, code, ...item } = Items[remainingItemName];
      const krName =
        krTranslations[remainingItemName] ||
        krTranslations[remainingItemName.toLowerCase()];

      let apiMetaData = {
        code: null,
        type: null,
        category: null
      };

      let krData;
      let id = code;

      if (krName) {
        // console.log(`[Found TL for "${remainingItemName}"]`);

        krData = missingTranslations[krName];
      } else {
        // console.log(`[Failed to find TL for "${remainingItemName}"]`);
      }

      if (!krData && ItemKeyLookups[id]) {
        // console.log(`[Found id for ${remainingItemName}: ${id}]`);
        krData = Object.values(missingTranslations).find(
          ({ code }) => code === id
        );
      } else if (!krData) {
        // console.log(`[Failed to find obejct by ID for "${remainingItemName}"]`);
      }

      if (krData) {
        // console.log(`[Found Data for "${remainingItemName}"]`);

        id = krData.code;
        apiMetaData = {
          code: krData.code,
          type: krData.type,
          category: krData.itemType
        };

        delete missingTranslations[krData.name];
        allItemKeys = allItemKeys.filter((key) => key !== remainingItemName);

        masterItems.push({
          id,
          ...item,
          name: sanitizeItemString(item.name),
          displayName: item.name,
          clientMetaData: {
            type,
            category
          },
          apiMetaData
        });
      } else {
        console.log(
          `[Failed to find Data for "${remainingItemName}", id: ${id}]`
        );
      }
    }

    linkMasterItems();
    writeFile('items', masterItems);

    return masterItems;
  };

  const generateCharacters = () => {
    const characterList = [];

    characters.forEach(
      ({
        code,
        resource,
        name,
        radius,
        uiHeight,
        levelUpStats,
        attributes,
        ...stats
      }) => {
        try {
          let keyName = name;
          switch (name.toLowerCase()) {
            case 'lidailin':
              keyName = 'Li Dailin';
              break;
            default:
              break;
          }
          const { description, details, abilities, weapons, background } =
            Characters[keyName] || {};

          characterList.push({
            id: code,
            displayName: keyName.replace(' ', ''),
            name: keyName,
            background,
            attributes,
            description,
            details: details ? Object.fromEntries(details) : null,
            abilities,
            weapons,
            stats: {
              initial: stats,
              perLevel: levelUpStats[0]
            },
            apiMetaData: {
              name,
              code,
              radius,
              uiHeight,
              resource
            }
          });
        } catch (e) {
          console.error('[Failed w/ Character]', { name, e });
        }
      }
    );

    writeFile(
      'characters',
      JSON.parse(
        JSON.stringify(characterList)
          .replace(/LiDailin/g, 'Li Dailin')
          .replace(/criticalStrikeChance/g, 'criticalChance')
      )
    );

    return characterList;
  };

  const generateArmorMetaData = () => {
    const data = Object.entries(Armors).map(([type, items]) => {
      const categoryApiMetaData = {
        type: null,
        name: type,
        category: null
      };

      const linkedItems = items.map((name) => {
        const linkedItem = masterItems.find(
          (i) => i.name === sanitizeItemString(name)
        );

        return {
          name,
          id: linkedItem ? linkedItem.id : name
        };
      });

      const apiLinkedItem = linkedItems.find(
        ({ id }) => typeof id === 'number'
      );
      const { apiMetaData } = keyedItems[apiLinkedItem.id];

      categoryApiMetaData.category = apiMetaData.category;
      categoryApiMetaData.type = apiMetaData.type;

      return {
        name: type,
        code: apiMetaData.type,
        items: linkedItems,
        apiMetaData: categoryApiMetaData
      };
    });

    writeFile('armors', data);

    return data;
  };

  const generateWeaponMetaData = () => {
    const data = Object.entries(Weapons).map(
      ([type, { weapons, ...weapon }]) => {
        const categoryApiMetaData = {
          type: null,
          name: type,
          category: null
        };

        const linkedItems = weapons.map((name) => {
          if (name.split(' ').pop() === 'Glove') {
            name = name.replace('Glove', 'Gloves');
          }
          const linkedItem = masterItems.find(
            (i) => i.name === sanitizeItemString(name)
          );

          return {
            name,
            id: linkedItem ? linkedItem.id : name
          };
        });

        const apiLinkedItem = linkedItems.find(
          ({ id }) => typeof id === 'number'
        );
        const { apiMetaData } = keyedItems[apiLinkedItem.id];

        categoryApiMetaData.category = apiMetaData.category;
        categoryApiMetaData.type = apiMetaData.type;

        return {
          ...weapon,
          items: linkedItems,
          apiMetaData: categoryApiMetaData
        };
      }
    );

    writeFile('weapons', data);

    return data;
  };

  const generateLocations = () => {
    const allLocations = locationSpawns.map(({ name, areaType, areaCode }) => [
      enTranslations[name],
      {
        id: areaCode,
        name: enTranslations[name],
        apiMetaData: { type: areaType, code: areaCode, name }
      }
    ]);
    const rawLocationObject = Object.fromEntries(allLocations);
    const locationsArr = [];

    Object.values(rawLocationObject).map((loc: any) => {
      const locationData = Locations[loc.name];
      const apiItems = locationSpawns
        .filter(({ areaCode }) => areaCode === loc.id)
        .map(({ itemCode, dropCount }) => {
          const item = keyedItems[itemCode];

          return {
            name: item ? item.name : itemCode,
            id: itemCode,
            quantity: dropCount
          };
        });

      if (!locationData) {
        console.error('Woops Dawg', { loc });
      }
      const wikiItems = Object.entries(locationData.materials)
        .filter(([name]) => {
          return !apiItems.some((i) => i.name !== name);
        })
        .map(([name, { quantity }]: any) => ({
          name,
          id: name,
          quantity: +quantity
        }));

      const locAnimals = Object.values(locationData.animals || {}).map(
        ({ name, quantity }) => {
          const clientAnimal = masterAnimals.find((an) => an.name === name);

          return {
            name,
            id: clientAnimal ? clientAnimal.id : name,
            quantity: +quantity
          };
        }
      );

      locationsArr.push({
        ...loc,
        animals: locAnimals,
        drops: [...wikiItems, ...apiItems],
        teleport: locationData.teleport,
        connections: locationData.connections.map((locName) => {
          const locationObj: any = rawLocationObject[locName];
          return {
            name: locName,
            id: locationObj ? locationObj.id : locName
          };
        })
      });
    });

    writeFile('locations', locationsArr);

    return locationsArr;
  };

  const animalData = generateAnimals();
  const itemsData = generateItems();
  const characterData = generateCharacters();

  masterItems.forEach((item) => (keyedItems[item.id] = item));

  const armorData = generateArmorMetaData();
  const weaponData = generateWeaponMetaData();

  const locationData = generateLocations();

  writeFile('missing', {
    missingItems: [...missingItems],
    missingTranslations
  });
  writeFile('master', {
    animals: animalData,
    items: itemsData,
    characters: characterData,
    armor: armorData,
    weapon: weaponData,
    locations: locationData
  });

  return Promise.resolve();
};
