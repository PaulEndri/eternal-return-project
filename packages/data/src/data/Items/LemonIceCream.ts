import Item from '../../types/Item';

export const LemonIceCream: Item = {
	"id": 302231,
	"name": "LemonIceCream",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Lemon"
		},
		{
			"name": "Scissors",
			"id": "Egg"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Lemon": 1,
		"Egg": 1
	},
	"stats": {
		"heal": 500
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"description": "",
	"displayName": "Lemon Ice Cream",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302231,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
