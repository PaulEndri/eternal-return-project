import Item from '../../types/Item';

export const Lemon: Item = {
	"id": 302105,
	"name": "Lemon",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Lemonade",
			"id": 301202
		},
		{
			"name": "Cocktail",
			"id": 301207
		},
		{
			"name": "Citrus Cake",
			"id": 302230
		},
		{
			"name": "Lemon Ice Cream",
			"id": 302231
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
	"displayName": "Lemon",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302105,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
