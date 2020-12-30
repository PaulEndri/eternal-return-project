import Item from '../../types/Item';

export const Water: Item = {
	"id": 301102,
	"name": "Water",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Fire Helmet",
			"id": 201302
		},
		{
			"name": "Boiling Water",
			"id": 301201
		},
		{
			"name": "Water Bottle",
			"id": "Water Bottle"
		},
		{
			"name": "Soju",
			"id": "Soju"
		},
		{
			"name": "Honey Water",
			"id": "Honey Water"
		},
		{
			"name": "Ice Water",
			"id": "Ice Water"
		},
		{
			"name": "Dead Battery",
			"id": 401205
		},
		{
			"name": "Poison",
			"id": 401302
		}
	],
	"requirements": {},
	"stats": {
		"spRestore": 100
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"apiMetaData": {
		"code": 301102,
		"category": "Consume",
		"type": "Beverage"
	},
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 1
}
