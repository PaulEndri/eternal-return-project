import Item from '../../types/Item';

export const WhiskeyCocktail: Item = {
	"id": 301307,
	"name": "WhiskeyCocktail",
	"buildsFrom": [
		{
			"name": "Cola",
			"id": 301209
		},
		{
			"name": "Whiskey",
			"id": 301104
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
	"displayName": "Whiskey Cocktail",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301307,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
