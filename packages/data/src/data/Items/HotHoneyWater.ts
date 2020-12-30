import Item from '../../types/Item';

export const HotHoneyWater: Item = {
	"id": "Hot Honey Water",
	"name": "Hot Honey Water",
	"href": "/Hot_Honey_Water",
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
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
