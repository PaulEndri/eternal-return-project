import Item from '../../types/Item';

export const Screwdriver: Item = {
	"id": "Screwdriver",
	"name": "Screwdriver",
	"href": "/Screwdriver",
	"buildsFrom": [
		{
			"name": "Whiskey",
			"id": "Whiskey"
		},
		{
			"name": "Lemon",
			"id": "Lemon"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Whiskey": 1,
		"Lemon": 1
	},
	"stats": {
		"spRestore": 300
	},
	"rarity": "Uncommon",
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
