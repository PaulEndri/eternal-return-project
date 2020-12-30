import Item from '../../types/Item';

export const PotatoSoup: Item = {
	"id": "Potato Soup",
	"name": "Potato Soup",
	"href": "/Potato_Soup",
	"buildsFrom": [
		{
			"name": "Potato",
			"id": "Potato"
		},
		{
			"name": "Milk",
			"id": "Milk"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Potato": 1,
		"Milk": 1
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
