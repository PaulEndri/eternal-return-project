import Item from '../../types/Item';

export const Hamburger: Item = {
	"id": 302226,
	"name": "Hamburger",
	"buildsFrom": [
		{
			"name": "Meat",
			"id": 302111
		},
		{
			"name": "Bread",
			"id": 302110
		}
	],
	"buildsInto": [],
	"requirements": {
		"Meat": 1,
		"Bread": 1
	},
	"stats": {
		"heal": 600
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Hamburger",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302226,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
