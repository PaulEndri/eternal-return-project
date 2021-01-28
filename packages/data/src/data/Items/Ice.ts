import Item from '../../types/Item';

export const Ice: Item = {
	"id": 301103,
	"name": "Ice",
	"buildsInto": [
		110408,
		113408,
		205402,
		301206,
		301216,
		301217,
		301308,
		302237
	],
	"requirements": {},
	"stats": {
		"spRestore": 200
	},
	"rarity": "Common",
	"code": "얼음",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Hospital": 6,
		"Cemetery": 5,
		"Hotel": 7
	},
	"foundQuantity": 2,
	"buildsFrom": [],
	"displayName": "Ice",
	"apiMetaData": {
		"code": 301103,
		"category": "Consume",
		"type": "Beverage"
	},
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
