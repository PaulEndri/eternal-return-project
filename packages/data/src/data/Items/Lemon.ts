import Item from '../../types/Item';

export const Lemon: Item = {
	"id": "Lemon",
	"name": "Lemon",
	"href": "/Lemon",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Lemonade",
			"id": "Lemonade"
		},
		{
			"name": "Screwdriver",
			"id": "Screwdriver"
		},
		{
			"name": "Citrus Cake",
			"id": "Citrus Cake"
		},
		{
			"name": "Lemon Ice Cream",
			"id": "Lemon Ice Cream"
		}
	],
	"requirements": {},
	"stats": {
		"heal": 100
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Hospital": 4,
		"Hotel": 6,
		"Uptown": 5
	},
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
