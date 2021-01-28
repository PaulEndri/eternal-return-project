import Item from '../../types/Item';

export const EggBun: Item = {
	"id": 302234,
	"name": "EggBun",
	"buildsFrom": [
		302112,
		302110
	],
	"buildsInto": [],
	"requirements": {
		"Egg": 1,
		"Bread": 1
	},
	"stats": {
		"heal": 400
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "",
	"displayName": "Egg Bun",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302234,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
