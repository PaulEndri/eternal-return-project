import Item from '../../types/Item';

export const Screwdriver: Item = {
	"id": 301207,
	"name": "Screwdriver",
	"buildsFrom": [
		{
			"name": "Whiskey",
			"id": 301104
		},
		{
			"name": "Lemon",
			"id": 302105
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
	"displayName": "Screwdriver",
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
