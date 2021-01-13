import Item from '../../types/Item';

export const EasterEgg: Item = {
	"id": 302235,
	"name": "EasterEgg",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Egg"
		},
		{
			"name": "Scissors",
			"id": "Chocolate"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Egg": 1,
		"Chocolate": 1
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
	"displayName": "Easter Egg",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302235,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
