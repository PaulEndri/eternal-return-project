import Item from '../../types/Item';

export const CitrusCake: Item = {
	"id": "Citrus Cake",
	"name": "Citrus Cake",
	"href": "/Citrus_Cake",
	"buildsFrom": [
		{
			"name": "Lemon",
			"id": "Lemon"
		},
		{
			"name": "Bread",
			"id": "Bread"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Lemon": 1,
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
