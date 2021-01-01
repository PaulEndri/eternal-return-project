import Item from '../../types/Item';

export const HotHoneyWater: Item = {
	"id": 301302,
	"name": "HotHoneyWater",
	"buildsFrom": [
		{
			"name": "Boiling Water",
			"id": 301201
		},
		{
			"name": "Honey",
			"id": 301101
		}
	],
	"buildsInto": [],
	"requirements": {
		"Water": 1,
		"Lighter": 1,
		"Honey": 1
	},
	"stats": {
		"spRestore": 1080
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Hot Honey Water",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301302,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
