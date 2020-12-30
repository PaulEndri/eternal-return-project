import Item from '../../types/Item';

export const HoneyMilk: Item = {
	"id": "Honey Milk",
	"name": "Honey Milk",
	"href": "/Honey_Milk",
	"buildsFrom": [
		{
			"name": "Milk",
			"id": "Milk"
		},
		{
			"name": "Honey",
			"id": 301101
		}
	],
	"buildsInto": [],
	"requirements": {
		"Milk": 1,
		"Honey": 1
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
