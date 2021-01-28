import Item from '../../types/Item';

export const Poundcake: Item = {
	"id": 302319,
	"name": "Poundcake",
	"buildsFrom": [
		302206,
		302110
	],
	"buildsInto": [],
	"requirements": {
		"Milk": 1,
		"Branch": 1,
		"Bread": 1
	},
	"stats": {
		"heal": 600
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Poundcake",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302319,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
