import Item from '../../types/Item';

export const Milk: Item = {
	"id": 301108,
	"name": "Milk",
	"buildsFrom": [],
	"buildsInto": [
		301210,
		301211,
		301214,
		301218,
		301311,
		302206,
		302228
	],
	"requirements": {},
	"stats": {
		"spRestore": 200
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Avenue": 6,
		"Hospital": 5,
		"Chapel": 3
	},
	"foundQuantity": 2,
	"displayName": "Milk",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301108,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
