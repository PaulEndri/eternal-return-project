import Item from '../../types/Item';

export const Meat: Item = {
	"id": "Meat",
	"name": "Meat",
	"href": "/Meat",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Tandoori Chicken",
			"id": "Tandoori Chicken"
		},
		{
			"name": "Bacon and Garlic Sticks",
			"id": "Bacon and Garlic Sticks"
		},
		{
			"name": "Hamburger",
			"id": "Hamburger"
		},
		{
			"name": "Fried Chicken",
			"id": "Fried Chicken"
		},
		{
			"name": "Steak",
			"id": "Steak"
		}
	],
	"requirements": {},
	"stats": {
		"heal": 200
	},
	"rarity": "Common",
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
