import Item from '../../types/Item';

export const Egg: Item = {
	"id": 302112,
	"name": "Egg",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Fish Fillet With Egg",
			"id": 302229
		},
		{
			"name": "Lemon Ice Cream",
			"id": 302231
		},
		{
			"name": "Egg Bun",
			"id": 302234
		},
		{
			"name": "Easter Egg",
			"id": 302235
		},
		{
			"name": "Scrambled Egg",
			"id": 302309
		},
		{
			"name": "Boiled Egg",
			"id": 302318
		}
	],
	"requirements": {},
	"stats": {
		"heal": 200
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Archery Range": 5,
		"Cemetery": 5,
		"Forest": 6
	},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Egg",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302112,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
