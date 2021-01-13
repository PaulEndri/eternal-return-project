import Item from '../../types/Item';

export const Americano: Item = {
	"id": 301304,
	"name": "Americano",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Boiling Water"
		},
		{
			"name": "Scissors",
			"id": "Coffee"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Water": 1,
		"Lighter": 1,
		"Coffee": 1
	},
	"stats": {
		"spRestore": 1080
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Americano",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301304,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
