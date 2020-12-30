import Item from '../../types/Item';

export const Ice: Item = {
	"id": 301103,
	"name": "Ice",
	"buildsFrom": [],
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
			"id": "Ice Coffee"
		},
		{
			"name": "Ice Water",
			"id": "Ice Water"
		},
		{
			"name": "On The Rocks",
			"id": "On The Rocks"
		},
		{
			"name": "Purified Water",
			"id": "Purified Water"
		},
		{
			"name": "Choco Ice Cream",
			"id": "Choco Ice Cream"
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
		"Hospital": 6,
		"Cemetery": 5,
		"Hotel": 7
	},
	"foundQuantity": 2,
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
