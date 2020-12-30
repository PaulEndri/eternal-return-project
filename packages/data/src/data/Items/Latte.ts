import Item from '../../types/Item';

export const Latte: Item = {
	"id": "Latte",
	"name": "Latte",
	"href": "/Latte",
	"buildsFrom": [
		{
			"name": "Milk",
			"id": "Milk"
		},
		{
			"name": "Coffee",
			"id": "Coffee"
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
