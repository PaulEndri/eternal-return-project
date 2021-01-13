import Item from '../../types/Item';

export const GarlicRamen: Item = {
	"id": 302402,
	"name": "GarlicRamen",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Hot Ramen"
		},
		{
			"name": "Scissors",
			"id": "Garlic"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Ramen": 1,
		"Water": 1,
		"Lighter": 1,
		"Garlic": 1
	},
	"stats": {
		"heal": 700
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "You can't compete with expertly cooked ramen.",
	"displayName": "Garlic Ramen",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302402,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
