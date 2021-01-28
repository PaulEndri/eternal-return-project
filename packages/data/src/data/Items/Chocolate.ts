import Item from '../../types/Item';

export const Chocolate: Item = {
	"id": 302119,
	"name": "Chocolate",
	"buildsFrom": [],
	"buildsInto": [
		301214,
		301310,
		302216,
		302235,
		302236,
		302237,
		302311
	],
	"requirements": {},
	"stats": {
		"heal": 200
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Avenue": 6,
		"Archery Range": 4,
		"Uptown": 5
	},
	"foundQuantity": 1,
	"description": "When you're low on sugar, eating this makes you feel strong and happy.",
	"displayName": "Chocolate",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302119,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
