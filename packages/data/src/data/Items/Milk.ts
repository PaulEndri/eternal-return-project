import Item from '../../types/Item';

export const Milk: Item = {
	"id": 301108,
	"name": "Milk",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Latte",
			"id": 301210
		},
		{
			"name": "Honey Milk",
			"id": 301211
		},
		{
			"name": "Chocolate Milk",
			"id": 301214
		},
		{
			"name": "Cowboy",
			"id": 301218
		},
		{
			"name": "White Russian",
			"id": 301311
		},
		{
			"name": "Butter",
			"id": 302206
		},
		{
			"name": "Potato Soup",
			"id": 302228
		}
	],
	"requirements": {},
	"stats": {
		"spRestore": 200
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Avenue": 6,
		"Hospital": 5,
		"Chapel": 3
	},
	"foundQuantity": 2,
	"displayName": "Milk",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301108,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
