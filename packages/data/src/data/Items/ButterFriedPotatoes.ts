import Item from '../../types/Item';

export const ButterFriedPotatoes: Item = {
	"id": 302325,
	"name": "ButterFriedPotatoes",
	"buildsFrom": [
		302102,
		302206
	],
	"buildsInto": [],
	"requirements": {
		"Potato": 1,
		"Milk": 1,
		"Branch": 1
	},
	"stats": {
		"heal": 650
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "",
	"displayName": "Butter-Fried Potatoes",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302325,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
