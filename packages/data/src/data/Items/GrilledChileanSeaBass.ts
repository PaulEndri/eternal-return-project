import Item from '../../types/Item';

export const GrilledChileanSeaBass: Item = {
	"id": "Grilled Chilean Sea Bass",
	"name": "Grilled Chilean Sea Bass",
	"href": "/Grilled_Chilean_Sea_Bass",
	"buildsFrom": [
		{
			"name": "Cod",
			"id": "Cod"
		},
		{
			"name": "Heated Stone",
			"id": 401215
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
