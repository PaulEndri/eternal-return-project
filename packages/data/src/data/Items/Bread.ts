import Item from '../../types/Item';

export const Bread: Item = {
	"id": 302110,
	"name": "Bread",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Garlic Bread",
			"id": 302205
		},
		{
			"name": "Carp Bread",
			"id": 302209
		},
		{
			"name": "Choco Pie",
			"id": 302216
		},
		{
			"name": "Bun",
			"id": 302225
		},
		{
			"name": "Hamburger",
			"id": 302226
		},
		{
			"name": "Potato Bread",
			"id": 302227
		},
		{
			"name": "Citrus Cake",
			"id": 302230
		},
		{
			"name": "Egg Bun",
			"id": 302234
		},
		{
			"name": "Curry Bun",
			"id": 302238
		},
		{
			"name": "Mocha Bread",
			"id": 302308
		},
		{
			"name": "Poundcake",
			"id": 302319
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
		"School": 6,
		"Chapel": 4,
		"Dock": 4
	},
	"foundQuantity": 1,
	"description": "A staple food. You can also staple it to trees.",
	"displayName": "Bread",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302110,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
