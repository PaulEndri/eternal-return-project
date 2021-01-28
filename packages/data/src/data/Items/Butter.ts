import Item from '../../types/Item';

export const Butter: Item = {
	"id": 302206,
	"name": "Butter",
	"buildsFrom": [
		301108,
		108101
	],
	"buildsInto": [
		302311,
		302315,
		302319,
		302325
	],
	"requirements": {
		"Milk": 1,
		"Branch": 1
	},
	"stats": {
		"heal": 450
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Butter",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302206,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
