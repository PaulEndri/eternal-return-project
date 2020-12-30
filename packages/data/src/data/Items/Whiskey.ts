import Item from '../../types/Item';

export const Whiskey: Item = {
	"id": "Whiskey",
	"name": "Whiskey",
	"href": "/Whiskey",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Screwdriver",
			"id": "Screwdriver"
		},
		{
			"name": "Highball",
			"id": "Highball"
		},
		{
			"name": "On The Rocks",
			"id": "On The Rocks"
		},
		{
			"name": "Cowboy",
			"id": "Cowboy"
		},
		{
			"name": "Whiskey Cocktail",
			"id": "Whiskey Cocktail"
		},
		{
			"name": "Whisky Bonbon",
			"id": "Whisky Bonbon"
		}
	],
	"requirements": {},
	"stats": {
		"spRestore": 450
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Hotel": 5,
		"Chapel": 4,
		"Uptown": 5
	},
	"foundQuantity": 1,
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
