import Item from '../../types/Item';

export const CarbonatedWater: Item = {
	"id": 301107,
	"name": "CarbonatedWater",
	"buildsInto": [
		{
			"name": "Lemonade",
			"id": 301202
		},
		{
			"name": "Cola",
			"id": 301209
		},
		{
			"name": "Highball",
			"id": 301213
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
	"code": "탄산수",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Hotel": 5,
		"Beach": 5,
		"Uptown": 5
	},
	"foundQuantity": 1,
	"buildsFrom": [],
	"displayName": "Carbonated Water",
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
