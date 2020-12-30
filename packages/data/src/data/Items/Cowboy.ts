import Item from '../../types/Item';

export const Cowboy: Item = {
	"id": "Cowboy",
	"name": "Cowboy",
	"href": "/Cowboy",
	"buildsFrom": [
		{
			"name": "Milk",
			"id": "Milk"
		},
		{
			"name": "Whiskey",
			"id": "Whiskey"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Milk": 1,
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
