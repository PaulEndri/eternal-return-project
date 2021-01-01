import Item from '../../types/Item';

export const Cowboy: Item = {
	"id": 301218,
	"name": "Cowboy",
	"buildsFrom": [
		{
			"name": "Milk",
			"id": 301108
		},
		{
			"name": "Whiskey",
			"id": 301104
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
	"displayName": "Cowboy",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301218,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
