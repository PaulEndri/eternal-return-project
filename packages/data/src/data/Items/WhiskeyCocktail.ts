import Item from '../../types/Item';

export const WhiskeyCocktail: Item = {
	"id": "Whiskey Cocktail",
	"name": "Whiskey Cocktail",
	"href": "/Whiskey_Cocktail",
	"buildsFrom": [
		{
			"name": "Cola",
			"id": 301209
		},
		{
			"name": "Whiskey",
			"id": "Whiskey"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Carbonated Water": 1,
		"Honey": 1,
		"Whiskey": 1
	},
	"stats": {
		"spRestore": 500
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 5,
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
