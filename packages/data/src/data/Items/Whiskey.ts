import Item from '../../types/Item';

export const Whiskey: Item = {
	"id": 301104,
	"name": "Whiskey",
	"buildsFrom": [],
	"buildsInto": [
		301207,
		301213,
		301217,
		301218,
		301307,
		302236
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
