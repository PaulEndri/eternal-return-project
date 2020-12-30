import Item from '../../types/Item';

export const CurryCroquette: Item = {
	"id": "Curry Croquette",
	"name": "Curry Croquette",
	"href": "/Curry_Croquette",
	"buildsFrom": [
		{
			"name": "Curry Powder",
			"id": "Curry Powder"
		},
		{
			"name": "Heated Oil",
			"id": 401203
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
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
