import Item from '../../types/Item';

export const PotatoBread: Item = {
	"id": 302227,
	"name": "PotatoBread",
	"buildsFrom": [
		{
			"name": "Potato",
			"id": 302102
		},
		{
			"name": "Bread",
			"id": 302110
		}
	],
	"buildsInto": [],
	"requirements": {
		"Potato": 1,
		"Bread": 1
	},
	"stats": {
		"heal": 360
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "",
	"displayName": "Potato Bread",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302227,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
