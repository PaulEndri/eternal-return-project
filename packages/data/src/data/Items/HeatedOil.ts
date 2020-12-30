import Item from '../../types/Item';

export const HeatedOil: Item = {
	"id": 401203,
	"name": "Heated Oil",
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
	"buildsInto": [
		{
			"name": "French Fries",
			"id": "French Fries"
		},
		{
			"name": "Scrambled Egg",
			"id": "Scrambled Egg"
		},
		{
			"name": "Fried Chicken",
			"id": "Fried Chicken"
		},
		{
			"name": "Curry Croquette",
			"id": "Curry Croquette"
		},
		{
			"name": "Fish Cutlet",
			"id": "Fish Cutlet"
		},
		{
			"name": "Stir Fried Ramen",
			"id": "Stir Fried Ramen"
		}
	],
	"requirements": {
		"Oil": 1,
		"Lighter": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 3,
	"description": "Heated oil. It was sometimes used as a thermal weapon in the past, but now mostly used for cooking.",
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
