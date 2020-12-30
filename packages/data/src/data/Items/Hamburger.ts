import Item from '../../types/Item';

export const Hamburger: Item = {
	"id": "Hamburger",
	"name": "Hamburger",
	"href": "/Hamburger",
	"buildsFrom": [
		{
			"name": "Meat",
			"id": "Meat"
		},
		{
			"name": "Bread",
			"id": "Bread"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Meat": 1,
		"Bread": 1
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
