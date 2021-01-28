import Item from '../../types/Item';

export const BoiledEgg: Item = {
	"id": 302318,
	"name": "BoiledEgg",
	"buildsFrom": [
		302112,
		301201
	],
	"buildsInto": [],
	"requirements": {
		"Egg": 1,
		"Water": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 600
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "",
	"displayName": "Boiled Egg",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302318,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
