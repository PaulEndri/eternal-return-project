import Item from '../../types/Item';

export const BoiledEgg: Item = {
	"id": "Boiled Egg",
	"name": "Boiled Egg",
	"href": "/Boiled_Egg",
	"buildsFrom": [
		{
			"name": "Egg",
			"id": "Egg"
		},
		{
			"name": "Boiling Water",
			"id": 301201
		}
	],
	"buildsInto": [],
	"requirements": {
		"Egg": 1,
		"Water": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 600
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
