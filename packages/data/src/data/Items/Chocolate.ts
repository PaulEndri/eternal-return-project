import Item from '../../types/Item';

export const Chocolate: Item = {
	"id": "Chocolate",
	"name": "Chocolate",
	"href": "/Chocolate",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Chocolate Milk",
			"id": "Chocolate Milk"
		},
		{
			"name": "Hot Chocolate",
			"id": "Hot Chocolate"
		},
		{
			"name": "Choco Pie",
			"id": "Choco Pie"
		},
		{
			"name": "Easter Egg",
			"id": "Easter Egg"
		},
		{
			"name": "Whisky Bonbon",
			"id": "Whisky Bonbon"
		},
		{
			"name": "Choco Ice Cream",
			"id": "Choco Ice Cream"
		},
		{
			"name": "Chocolate Chip Cookies",
			"id": "Chocolate Chip Cookies"
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
		"Avenue": 6,
		"Archery Range": 4,
		"Uptown": 5
	},
	"foundQuantity": 1,
	"description": "When you're low on sugar, eating this makes you feel strong and happy.",
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
