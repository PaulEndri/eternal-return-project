import Item from '../../types/Item';

export const Butter: Item = {
	"id": "Butter",
	"name": "Butter",
	"href": "/Butter",
	"buildsFrom": [
		{
			"name": "Milk",
			"id": "Milk"
		},
		{
			"name": "Branch",
			"id": 108101
		}
	],
	"buildsInto": [
		{
			"name": "Chocolate Chip Cookies",
			"id": "Chocolate Chip Cookies"
		},
		{
			"name": "Honey Butter",
			"id": "Honey Butter"
		},
		{
			"name": "Poundcake",
			"id": "Poundcake"
		},
		{
			"name": "Butter-Fried Potatoes",
			"id": "Butter-Fried Potatoes"
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
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
