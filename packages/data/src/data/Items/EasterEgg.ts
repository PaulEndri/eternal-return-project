import Item from '../../types/Item';

export const EasterEgg: Item = {
	"id": "Easter Egg",
	"name": "Easter Egg",
	"href": "/Easter_Egg",
	"buildsFrom": [
		{
			"name": "Egg",
			"id": "Egg"
		},
		{
			"name": "Chocolate",
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
