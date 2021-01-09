import Item from '../../types/Item';

export const HeatedOil: Item = {
	"id": 401203,
	"name": "HeatedOil",
	"buildsInto": [
		{
			"name": "French Fries",
			"id": 302302
		},
		{
			"name": "Scrambled Egg",
			"id": 302309
		},
		{
			"name": "Fried Chicken",
			"id": 302316
		},
		{
			"name": "Curry Croquette",
			"id": 302322
		},
		{
			"name": "Fish Cutlet",
			"id": 302326
		},
		{
			"name": "Stir Fried Ramen",
			"id": 302327
		}
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
		{
			"name": "Oil",
			"id": 401112
		},
		{
			"name": "Lighter",
			"id": 401107
		}
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
		{
			"name": "Wolf",
			"id": 5
		},
		{
			"name": "Bear",
			"id": 6
		}
	],
	"airSupply": true,
	"collectible": 0
}
