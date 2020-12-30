import Item from '../../types/Item';

export const Curry: Item = {
	"id": "Curry",
	"name": "Curry",
	"href": "/Curry",
	"buildsFrom": [
		{
			"name": "Curry Powder",
			"id": "Curry Powder"
		},
		{
			"name": "Boiling Water",
			"id": 301201
		}
	],
	"buildsInto": [],
	"requirements": {
		"Curry Powder": 1,
		"Water": 1,
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
	"description": "Curry is a dish made by mixing many different kinds of spices. One of the main ingredients is turmeric, which may help prevent Alzheimer's disease.",
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
