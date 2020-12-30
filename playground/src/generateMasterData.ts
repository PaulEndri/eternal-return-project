import Animals from './generated/newGenerated/Animals.json';
import animals from './generated/clientData/animals.json';
import Items from './generated/newGenerated/Items.json';
import weapons from './generated/clientData/weapons.json';
import armors from './generated/clientData/armors.json';
import misc from './generated/clientData/misc.json';
import special from './generated/clientData/special.json';
import consumables from './generated/clientData/consumables.json';
import { enTranslations, krTranslations, rawTranslations } from './krTranslations';
import Characters from './generated/newGenerated/Characters.json';
import characters from './generated/clientData/characters.json';
import Armors from './generated/newGenerated/Armors.json';
import Weapons from './generated/newGenerated/Weapons.json';
import lootLogic from './generated/clientData/howToFind.json';
import Locations from './generated/newGenerated/Locations.json';
import locationSpawns from './generated/clientData/spawns.json';

import fs from 'fs';

const masterAnimals = [];
const masterItems = [];
const keyedItems = {};

let missingTranslations = {};
const missingItems = new Set();

let allItemKeys = Object.keys(Items);
const writeFile = (name: string, content) => {
	fs.writeFileSync(`src/generated/masterData/${name}.json`, JSON.stringify(content, null, 2));
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

		const { resource, dropGroup, grade, monster, code, ...clientAnimal } = Object.values(
			animals
		).find(({ monster }) => monster === title);

		if (animal.locations) {
			Object.keys(animal.locations).forEach(
				(key) => (animal.locations[key] = +animal.locations[key])
			);
		}

		let items;

		if (animal.items) {
			items = Object.values(animal.items).map(({ name, percentage, rarity }) => ({
				name,
				percentage: +percentage,
				rarity
			}));
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

const getItemData = (itemArr: any[], apiTypeKey = 'type', apiCode = 'code', apiName = 'name') => {
	itemArr.forEach((item) => {
		const name = item[apiName];
		const enName = enTranslations[name];
		const apiType = item[apiTypeKey];
		const id = item[apiCode];
		const data = enName ? Items[enName] : Items[name];

		if (data) {
			allItemKeys = allItemKeys.filter((key) => key !== enName && key !== name);

			const { href, type, category, ...rest } = data;

			masterItems.push({
				id,
				...rest,
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
			const foundItem = masterItems.find(({ name }) => itemName === name);

			if (!foundItem || typeof foundItem.id === 'string') {
				missingItems.add(itemName);
			}

			return {
				name: itemName,
				id: foundItem ? foundItem.id : null
			};
		});

		item.buildsInto = item.buildsInto.map((itemName) => {
			const foundItem = masterItems.find(({ name }) => itemName === name);

			if (!foundItem || typeof foundItem.id === 'string') {
				missingItems.add(itemName);
			}

			return {
				name: itemName,
				id: foundItem ? foundItem.id : null
			};
		});

		const canBeLooted = lootLogic.find(({ itemCode }) => itemCode === item.id);

		if (canBeLooted) {
			Object.entries(canBeLooted).forEach(([ key, val ]) => {
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

	const remainingTranslations = Object.values(missingTranslations);

	allItemKeys.forEach((remainingItemName) => {
		const { type, category, ...item } = Items[remainingItemName];
		const krName = rawTranslations[remainingItemName];
		let apiMetaData = {
			code: null,
			type: null,
			category: null
		};
		let id = remainingItemName;

		if (krName) {
			allItemKeys = allItemKeys.filter((key) => key !== remainingItemName);

			const krData = remainingTranslations.find(
				({ name }) => name === krName || name === krName.replace(/ /g, '')
			) as any;

			if (krData) {
				id = krData.code;
				apiMetaData = {
					code: krData.code,
					type: krData.type,
					category: krData.itemType
				};
			}
		}

		masterItems.push({
			id,
			...item,
			clientMetaData: {
				type,
				category
			},
			apiMetaData
		});
	});

	linkMasterItems();

	writeFile('items', masterItems);

	return masterItems;
};

const generateCharacters = () => {
	const characterList = [];

	characters.forEach(
		({ code, resource, name, radius, uiHeight, levelUpStats, attributes, ...stats }) => {
			try {
				let keyName = name;
				switch (name) {
					case 'LiDailin':
						keyName = 'Li Dailin';
						break;
					default:
						break;
				}
				const { description, details, abilities, weapons } = Characters[keyName] || {};

				characterList.push({
					id: code,
					name: keyName,
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

	writeFile('characters', characterList);

	return characterList;
};

const generateArmorMetaData = () => {
	const data = Object.entries(Armors).map(([ type, items ]) => {
		const categoryApiMetaData = {
			type: null,
			name: type,
			category: null
		};

		const linkedItems = items.map((name) => {
			const linkedItem = masterItems.find((i) => i.name === name);

			return {
				name,
				id: linkedItem ? linkedItem.id : name
			};
		});

		const apiLinkedItem = linkedItems.find(({ id }) => typeof id === 'number');
		const { apiMetaData } = keyedItems[apiLinkedItem.id];

		categoryApiMetaData.category = apiMetaData.category;
		categoryApiMetaData.type = apiMetaData.type;

		return {
			name: type,
			items: linkedItems,
			apiMetaData: categoryApiMetaData
		};
	});

	writeFile('armors', data);

	return data;
};

const generateWeaponMetaData = () => {
	const data = Object.entries(Weapons).map(([ type, { weapons, ...weapon } ]) => {
		const categoryApiMetaData = {
			type: null,
			name: type,
			category: null
		};

		const linkedItems = weapons.map((name) => {
			const linkedItem = masterItems.find((i) => i.name === name);

			return {
				name,
				id: linkedItem ? linkedItem.id : name
			};
		});

		const apiLinkedItem = linkedItems.find(({ id }) => typeof id === 'number');
		const { apiMetaData } = keyedItems[apiLinkedItem.id];

		categoryApiMetaData.category = apiMetaData.category;
		categoryApiMetaData.type = apiMetaData.type;

		return {
			...weapon,
			items: linkedItems,
			apiMetaData: categoryApiMetaData
		};
	});

	writeFile('weapons', data);

	return data;
};

const generateLocations = () => {
	const allLocations = locationSpawns.map(({ name, areaType, areaCode }) => [
		krTranslations[name],
		{
			id: areaCode,
			name: krTranslations[name],
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
			.filter(([ name ]) => {
				return !apiItems.some((i) => i.name !== name);
			})
			.map(([ name, { quantity } ]: any) => ({ name, id: name, quantity: +quantity }));

		const locAnimals = Object.values(locationData.animals || {}).map(({ name, quantity }) => {
			const clientAnimal = masterAnimals.find((an) => an.name === name);

			return {
				name,
				id: clientAnimal ? clientAnimal.id : name,
				quantity: +quantity
			};
		});

		locationsArr.push({
			...loc,
			animals: locAnimals,
			drops: [ ...wikiItems, ...apiItems ],
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

writeFile('missing', { missingItems: [ ...missingItems ], missingTranslations });
writeFile('master', {
	animals: animalData,
	items: itemsData,
	characters: characterData,
	armor: armorData,
	weapon: weaponData,
	locations: locationData
});
