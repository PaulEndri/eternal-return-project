import Item from '../../types/Item';

export const HoneyGarlicPickle: Item = {
	"id": "Honey Garlic Pickle",
	"name": "Honey Garlic Pickle",
	"href": "/Honey_Garlic_Pickle",
	"buildsFrom": [
		{
			"name": "Garlic",
			"id": "Garlic"
		},
		{
			"name": "Honey",
			"id": 301101
		}
	],
	"buildsInto": [],
	"requirements": {
		"Garlic": 1,
		"Honey": 1
	},
	"stats": {
		"heal": 480
	},
	"rarity": "Uncommon",
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
