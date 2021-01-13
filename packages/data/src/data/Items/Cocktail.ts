import Item from '../../types/Item';

export const Cocktail: Item = {
	"id": 301207,
	"name": "Cocktail",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Whiskey"
		},
		{
			"name": "Scissors",
			"id": "Lemon"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Whiskey": 1,
		"Lemon": 1
	},
	"stats": {
		"spRestore": 300
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 4,
	"displayName": "Cocktail",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301207,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
