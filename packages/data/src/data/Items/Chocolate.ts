import Item from '../../types/Item';

export const Chocolate: Item = {
	"id": 302119,
	"name": "Chocolate",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Chocolate Milk",
			"id": 301214
		},
		{
			"name": "Hot Chocolate",
			"id": 301310
		},
		{
			"name": "Choco Pie",
			"id": 302216
		},
		{
			"name": "Easter Egg",
			"id": 302235
		},
		{
			"name": "Whisky Bonbon",
			"id": 302236
		},
		{
			"name": "Choco Ice Cream",
			"id": 302237
		},
		{
			"name": "Chocolate Chip Cookies",
			"id": 302311
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
	"displayName": "Chocolate",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302119,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
