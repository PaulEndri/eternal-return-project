import Item from '../../types/Item';

export const HoneyWater: Item = {
	"id": "Honey Water",
	"name": "Honey Water",
	"href": "/Honey_Water",
	"buildsFrom": [
		{
			"name": "Honey",
			"id": 301101
		},
		{
			"name": "Water",
			"id": 301102
		}
	],
	"buildsInto": [],
	"requirements": {
		"Honey": 1,
		"Water": 1
	},
	"stats": {
		"spRestore": 400
	},
	"rarity": "Uncommon",
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
