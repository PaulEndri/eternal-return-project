import Item from '../../types/Item';

export const Ice: Item = {
	"id": 301103,
	"name": "Ice",
	"buildsInto": [
		{
			"name": "Frost Petal Hand",
			"id": 110408
		},
		{
			"name": "Frost Venom Dart",
			"id": 113408
		},
		{
			"name": "Glacial Ice",
			"id": 205402
		},
		{
			"name": "Ice Coffee",
			"id": 301206
		},
		{
			"name": "Ice Water",
			"id": 301216
		},
		{
			"name": "On The Rocks",
			"id": 301217
		},
		{
			"name": "Purified Water",
			"id": 301308
		},
		{
			"name": "Choco Ice Cream",
			"id": 302237
		}
	],
	"requirements": {},
	"stats": {
		"spRestore": 200
	},
	"rarity": "Common",
	"code": "얼음",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Hospital": 6,
		"Cemetery": 5,
		"Hotel": 7
	},
	"foundQuantity": 2,
	"buildsFrom": [],
	"displayName": "Ice",
	"apiMetaData": {
		"code": 301103,
		"category": "Consume",
		"type": "Beverage"
	},
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
