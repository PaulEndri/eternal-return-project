import Item from '../../types/Item';

export const Soju: Item = {
	"id": "Soju",
	"name": "Soju",
	"href": "/Soju",
	"buildsFrom": [
		{
			"name": "Alcohol",
			"id": 401111
		},
		{
			"name": "Water",
			"id": 301102
		}
	],
	"buildsInto": [],
	"requirements": {
		"Alcohol": 1,
		"Water": 1
	},
	"stats": {
		"spRestore": 350
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
