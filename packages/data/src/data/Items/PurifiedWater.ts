import Item from '../../types/Item';

export const PurifiedWater: Item = {
	"id": "Purified Water",
	"name": "Purified Water",
	"href": "/Purified_Water",
	"buildsFrom": [
		{
			"name": "Boiling Water",
			"id": 301201
		},
		{
			"name": "Ice",
			"id": 301103
		}
	],
	"buildsInto": [],
	"requirements": {
		"Water": 1,
		"Lighter": 1,
		"Ice": 1
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
