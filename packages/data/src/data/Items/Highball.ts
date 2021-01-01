import Item from '../../types/Item';

export const Highball: Item = {
	"id": 301213,
	"name": "Highball",
	"buildsFrom": [
		{
			"name": "Whiskey",
			"id": 301104
		},
		{
			"name": "Carbonated Water",
			"id": 301107
		}
	],
	"buildsInto": [],
	"requirements": {
		"Whiskey": 1,
		"Carbonated Water": 1
	},
	"stats": {
		"spRestore": 530
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Highball",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301213,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
