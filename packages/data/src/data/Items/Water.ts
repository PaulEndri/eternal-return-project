import Item from '../../types/Item';

export const Water: Item = {
	"id": 301102,
	"name": "Water",
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
			"id": 301203
		},
		{
			"name": "Soju",
			"id": 301205
		},
		{
			"name": "Honey Water",
			"id": 301215
		},
		{
			"name": "Ice Water",
			"id": 301216
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
	"code": "물",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"buildsFrom": [],
	"displayName": "Water",
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
