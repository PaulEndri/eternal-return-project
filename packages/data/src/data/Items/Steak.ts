import Item from '../../types/Item';

export const Steak: Item = {
	"id": "Steak",
	"name": "Steak",
	"href": "/Steak",
	"buildsFrom": [
		{
			"name": "Meat",
			"id": "Meat"
		},
		{
			"name": "Heated Stone",
			"id": 401215
		}
	],
	"buildsInto": [],
	"requirements": {
		"Meat": 1,
		"Stone": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 420
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 4,
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
