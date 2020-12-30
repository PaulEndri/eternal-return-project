import Item from '../../types/Item';

export const Poison: Item = {
	"id": 401302,
	"name": "Poison",
	"buildsFrom": [
		{
			"name": "Ash",
			"id": 401210
		},
		{
			"name": "Water",
			"id": 301102
		}
	],
	"buildsInto": [
		{
			"name": "Lloigor & Zahr",
			"id": 103502
		},
		{
			"name": "Spy Umbrella",
			"id": 108501
		},
		{
			"name": "Venom Dart",
			"id": 113402
		},
		{
			"name": "Azure Dagger",
			"id": 113409
		},
		{
			"name": "Schrodinger's Box",
			"id": "Schrodinger's Box"
		}
	],
	"requirements": {
		"Paper": 1,
		"Lighter": 1,
		"Water": 1
	},
	"stats": {},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "DO NOT DRINK.",
	"apiMetaData": {
		"code": 401302,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		{
			"name": "Wolf",
			"id": 5
		},
		{
			"name": "Bear",
			"id": 6
		}
	],
	"airSupply": true,
	"collectible": 0
}
