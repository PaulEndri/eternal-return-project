import Item from '../../types/Item';

export const HeatedOil: Item = {
	"id": 401203,
	"name": "HeatedOil",
	"buildsInto": [
		302302,
		302309,
		302316,
		302322,
		302326,
		302327
	],
	"requirements": {
		"Oil": 1,
		"Lighter": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "뜨거운오일",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 3,
	"description": "Heated oil. It was sometimes used as a thermal weapon in the past, but now mostly used for cooking.",
	"buildsFrom": [
		401112,
		401107
	],
	"displayName": "Heated Oil",
	"apiMetaData": {
		"code": 401203,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		5,
		6
	],
	"airSupply": true,
	"collectible": 0
}
