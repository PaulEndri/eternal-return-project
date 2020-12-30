import Item from '../../types/Item';

export const ChocolateMilk: Item = {
	"id": "Chocolate Milk",
	"name": "Chocolate Milk",
	"href": "/Chocolate_Milk",
	"buildsFrom": [
		{
			"name": "Chocolate",
			"id": "Chocolate"
		},
		{
			"name": "Milk",
			"id": "Milk"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Chocolate": 1,
		"Milk": 1
	},
	"stats": {
		"spRestore": 400
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
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
