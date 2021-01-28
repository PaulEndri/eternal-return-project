import Item from '../../types/Item';

export const HotRamen: Item = {
	"id": 302307,
	"name": "HotRamen",
	"buildsFrom": [
		302113,
		301201
	],
	"buildsInto": [
		302402
	],
	"requirements": {
		"Ramen": 1,
		"Water": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 550
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "With chopped onions and egg it tastes heavenly. You probably can't stop yourself from slurping it up when you eat.",
	"displayName": "Hot Ramen",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302307,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
