import Item from '../../types/Item';

export const GrilledChileanSeaBass: Item = {
	"id": 302306,
	"name": "GrilledChileanSeaBass",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Cod"
		},
		{
			"name": "Scissors",
			"id": "Heated Stone"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Cod": 1,
		"Stone": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 480
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"description": "",
	"displayName": "Grilled Chilean Sea Bass",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302306,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
