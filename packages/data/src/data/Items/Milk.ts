import Item from '../../types/Item';

export const Milk: Item = {
	"id": "Milk",
	"name": "Milk",
	"href": "/Milk",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Latte",
			"id": "Latte"
		},
		{
			"name": "Honey Milk",
			"id": "Honey Milk"
		},
		{
			"name": "Chocolate Milk",
			"id": "Chocolate Milk"
		},
		{
			"name": "Cowboy",
			"id": "Cowboy"
		},
		{
			"name": "White Russian",
			"id": "White Russian"
		},
		{
			"name": "Butter",
			"id": "Butter"
		},
		{
			"name": "Potato Soup",
			"id": "Potato Soup"
		}
	],
	"requirements": {},
	"stats": {
		"spRestore": 200
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Avenue": 6,
		"Hospital": 5,
		"Chapel": 3
	},
	"foundQuantity": 2,
	"clientMetaData": {
		"type": "Beverage",
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
