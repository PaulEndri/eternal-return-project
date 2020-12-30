import Item from '../../types/Item';

export const IceCoffee: Item = {
	"id": "Ice Coffee",
	"name": "Ice Coffee",
	"href": "/Ice_Coffee",
	"buildsFrom": [
		{
			"name": "Ice",
			"id": 301103
		},
		{
			"name": "Coffee",
			"id": "Coffee"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Ice": 1,
		"Coffee": 1
	},
	"stats": {
		"spRestore": 530
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
