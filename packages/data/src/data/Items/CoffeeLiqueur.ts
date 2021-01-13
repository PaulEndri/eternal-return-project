import Item from '../../types/Item';

export const CoffeeLiqueur: Item = {
	"id": 301208,
	"name": "CoffeeLiqueur",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Coffee"
		},
		{
			"name": "Scissors",
			"id": "Alcohol"
		}
	],
	"buildsInto": [
		{
			"name": "White Russian",
			"id": 301311
		},
		{
			"name": "Mocha Bread",
			"id": 302308
		}
	],
	"requirements": {
		"Coffee": 1,
		"Alcohol": 1
	},
	"stats": {
		"spRestore": 530
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Coffee Liqueur",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301208,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
