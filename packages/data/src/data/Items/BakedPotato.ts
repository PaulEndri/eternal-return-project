import Item from '../../types/Item';

export const BakedPotato: Item = {
	"id": "Baked Potato",
	"name": "Baked Potato",
	"href": "/Baked_Potato",
	"buildsFrom": [
		{
			"name": "Potato",
			"id": "Potato"
		},
		{
			"name": "Heated Stone",
			"id": 401215
		}
	],
	"buildsInto": [],
	"requirements": {
		"Potato": 1,
		"Stone": 1,
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
	"description": "Just add butter and salt for an fantastic side dish!",
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
