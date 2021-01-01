import Item from '../../types/Item';

export const Butter: Item = {
	"id": 302206,
	"name": "Butter",
	"buildsFrom": [
		{
			"name": "Milk",
			"id": 301108
		},
		{
			"name": "Branch",
			"id": 108101
		}
	],
	"buildsInto": [
		{
			"name": "Chocolate Chip Cookies",
			"id": 302311
		},
		{
			"name": "Honey Butter",
			"id": 302315
		},
		{
			"name": "Poundcake",
			"id": 302319
		},
		{
			"name": "Butter-Fried Potatoes",
			"id": 302325
		}
	],
	"requirements": {
		"Milk": 1,
		"Branch": 1
	},
	"stats": {
		"heal": 450
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Butter",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302206,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
