import Item from '../../types/Item';

export const Whiskey: Item = {
	"id": 301104,
	"name": "Whiskey",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Cocktail",
			"id": 301207
		},
		{
			"name": "Highball",
			"id": 301213
		},
		{
			"name": "On The Rocks",
			"id": 301217
		},
		{
			"name": "Cowboy",
			"id": 301218
		},
		{
			"name": "Whiskey Cocktail",
			"id": 301307
		},
		{
			"name": "Whisky Bonbon",
			"id": 302236
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
	"displayName": "Whiskey",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301104,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
