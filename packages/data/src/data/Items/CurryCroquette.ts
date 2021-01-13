import Item from '../../types/Item';

export const CurryCroquette: Item = {
	"id": 302322,
	"name": "CurryCroquette",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Curry Powder"
		},
		{
			"name": "Scissors",
			"id": "Heated Oil"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Curry Powder": 1,
		"Oil": 1,
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
	"description": "",
	"displayName": "Curry Croquette",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302322,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
