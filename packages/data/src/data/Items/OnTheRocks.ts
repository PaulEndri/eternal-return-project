import Item from '../../types/Item';

export const OnTheRocks: Item = {
	"id": "On The Rocks",
	"name": "On The Rocks",
	"href": "/On_The_Rocks",
	"buildsFrom": [
		{
			"name": "Ice",
			"id": 301103
		},
		{
			"name": "Whiskey",
			"id": "Whiskey"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Ice": 1,
		"Whiskey": 1
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
