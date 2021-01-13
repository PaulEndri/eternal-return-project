import Item from '../../types/Item';

export const BoilingWater: Item = {
	"id": 301201,
	"name": "BoilingWater",
	"buildsInto": [
		{
			"name": "Flubber",
			"id": 112304
		},
		{
			"name": "Hot Honey Water",
			"id": 301302
		},
		{
			"name": "Americano",
			"id": 301304
		},
		{
			"name": "Purified Water",
			"id": 301308
		},
		{
			"name": "Hot Chocolate",
			"id": 301310
		},
		{
			"name": "Spicy Fish Stew",
			"id": 302301
		},
		{
			"name": "Hot Ramen",
			"id": 302307
		},
		{
			"name": "Curry",
			"id": 302313
		},
		{
			"name": "Oriental Concoction",
			"id": 302314
		},
		{
			"name": "Boiled Egg",
			"id": 302318
		}
	],
	"requirements": {
		"Water": 1,
		"Lighter": 1
	},
	"stats": {
		"spRestore": 200
	},
	"rarity": "Uncommon",
	"code": "뜨거운물",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 301102
		},
		{
			"name": "Scissors",
			"id": 401107
		}
	],
	"displayName": "Boiling Water",
	"apiMetaData": {
		"code": 301201,
		"category": "Consume",
		"type": "Beverage"
	},
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
