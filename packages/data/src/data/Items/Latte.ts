import Item from '../../types/Item';

export const Latte: Item = {
	"id": 301210,
	"name": "Latte",
	"buildsFrom": [
		{
			"name": "Milk",
			"id": 301108
		},
		{
			"name": "Coffee",
			"id": 301106
		}
	],
	"buildsInto": [],
	"requirements": {
		"Milk": 1,
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
	"displayName": "Latte",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301210,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
