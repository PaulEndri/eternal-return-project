import Item from '../../types/Item';

export const PotatoBread: Item = {
	"id": "Potato Bread",
	"name": "Potato Bread",
	"href": "/Potato_Bread",
	"buildsFrom": [
		{
			"name": "Potato",
			"id": "Potato"
		},
		{
			"name": "Bread",
			"id": "Bread"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Potato": 1,
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
