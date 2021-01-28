import Item from '../../types/Item';

export const Steak: Item = {
	"id": 302323,
	"name": "Steak",
	"buildsFrom": [
		302111,
		401215
	],
	"buildsInto": [],
	"requirements": {
		"Meat": 1,
		"Stone": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 420
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 4,
	"description": "",
	"displayName": "Steak",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302323,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
