import Item from '../../types/Item';

export const Highball: Item = {
	"id": "Highball",
	"name": "Highball",
	"href": "/Highball",
	"buildsFrom": [
		{
			"name": "Whiskey",
			"id": "Whiskey"
		},
		{
			"name": "Carbonated Water",
			"id": 301107
		}
	],
	"buildsInto": [],
	"requirements": {
		"Whiskey": 1,
		"Carbonated Water": 1
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
