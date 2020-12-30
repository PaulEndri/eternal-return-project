import Item from '../../types/Item';

export const HotChocolate: Item = {
	"id": "Hot Chocolate",
	"name": "Hot Chocolate",
	"href": "/Hot_Chocolate",
	"buildsFrom": [
		{
			"name": "Boiling Water",
			"id": 301201
		},
		{
			"name": "Chocolate",
			"id": "Chocolate"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Water": 1,
		"Lighter": 1,
		"Chocolate": 1
	},
	"stats": {
		"spRestore": 450
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 4,
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
