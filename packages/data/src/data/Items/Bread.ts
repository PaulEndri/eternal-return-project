import Item from '../../types/Item';

export const Bread: Item = {
	"id": "Bread",
	"name": "Bread",
	"href": "/Bread",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Garlic Bread",
			"id": "Garlic Bread"
		},
		{
			"name": "Carp Bread",
			"id": "Carp Bread"
		},
		{
			"name": "Choco Pie",
			"id": "Choco Pie"
		},
		{
			"name": "Bun",
			"id": "Bun"
		},
		{
			"name": "Hamburger",
			"id": "Hamburger"
		},
		{
			"name": "Potato Bread",
			"id": "Potato Bread"
		},
		{
			"name": "Citrus Cake",
			"id": "Citrus Cake"
		},
		{
			"name": "Egg Bun",
			"id": "Egg Bun"
		},
		{
			"name": "Curry Bun",
			"id": "Curry Bun"
		},
		{
			"name": "Mocha Bread",
			"id": "Mocha Bread"
		},
		{
			"name": "Poundcake",
			"id": "Poundcake"
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
