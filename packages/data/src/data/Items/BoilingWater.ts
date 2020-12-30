import Item from '../../types/Item';

export const BoilingWater: Item = {
	"id": 301201,
	"name": "Boiling Water",
	"buildsFrom": [
		{
			"name": "Water",
			"id": 301102
		},
		{
			"name": "Lighter",
			"id": 401107
		}
	],
	"buildsInto": [
		{
			"name": "Flubber",
			"id": 112304
		},
		{
			"name": "Hot Honey Water",
			"id": "Hot Honey Water"
		},
		{
			"name": "Americano",
			"id": "Americano"
		},
		{
			"name": "Purified Water",
			"id": "Purified Water"
		},
		{
			"name": "Hot Chocolate",
			"id": "Hot Chocolate"
		},
		{
			"name": "Spicy Fish Stew",
			"id": "Spicy Fish Stew"
		},
		{
			"name": "Hot Ramen",
			"id": "Hot Ramen"
		},
		{
			"name": "Curry",
			"id": "Curry"
		},
		{
			"name": "Oriental Concoction",
			"id": "Oriental Concoction"
		},
		{
			"name": "Boiled Egg",
			"id": "Boiled Egg"
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
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
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
