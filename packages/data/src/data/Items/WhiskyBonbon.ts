import Item from '../../types/Item';

export const WhiskyBonbon: Item = {
	"id": "Whisky Bonbon",
	"name": "Whisky Bonbon",
	"href": "/Whisky_Bonbon",
	"buildsFrom": [
		{
			"name": "Whiskey",
			"id": "Whiskey"
		},
		{
			"name": "Chocolate",
			"id": "Chocolate"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Whiskey": 1,
		"Chocolate": 1
	},
	"stats": {
		"heal": 400
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
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
