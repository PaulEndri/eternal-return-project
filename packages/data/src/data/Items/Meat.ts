import Item from '../../types/Item';

export const Meat: Item = {
	"id": 302111,
	"name": "Meat",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Tandoori Chicken",
			"id": 302222
		},
		{
			"name": "Bacon and Garlic Sticks",
			"id": 302224
		},
		{
			"name": "Hamburger",
			"id": 302226
		},
		{
			"name": "Fried Chicken",
			"id": 302316
		},
		{
			"name": "Steak",
			"id": 302323
		}
	],
	"requirements": {},
	"stats": {
		"heal": 200
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Meat",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302111,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
