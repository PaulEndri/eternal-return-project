import Item from '../../types/Item';

export const CarbonatedWater: Item = {
	"id": 301107,
	"name": "CarbonatedWater",
	"buildsInto": [
		301209,
		401306,
		301202,
		301213
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
