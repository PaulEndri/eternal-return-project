import Item from '../../types/Item';

export const Americano: Item = {
	"id": "Americano",
	"name": "Americano",
	"href": "/Americano",
	"buildsFrom": [
		{
			"name": "Boiling Water",
			"id": 301201
		},
		{
			"name": "Coffee",
			"id": "Coffee"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Water": 1,
		"Lighter": 1,
		"Coffee": 1
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
