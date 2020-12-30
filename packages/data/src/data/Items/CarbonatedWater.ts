import Item from '../../types/Item';

export const CarbonatedWater: Item = {
	"id": 301107,
	"name": "Carbonated Water",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Lemonade",
			"id": "Lemonade"
		},
		{
			"name": "Cola",
			"id": 301209
		},
		{
			"name": "Highball",
			"id": "Highball"
		},
		{
			"name": "Ion Battery",
			"id": 401306
		}
	],
	"requirements": {},
	"stats": {
		"spRestore": 380
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Hotel": 5,
		"Beach": 5,
		"Uptown": 5
	},
	"foundQuantity": 1,
	"apiMetaData": {
		"code": 301107,
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
