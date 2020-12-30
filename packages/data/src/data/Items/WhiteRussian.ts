import Item from '../../types/Item';

export const WhiteRussian: Item = {
	"id": "White Russian",
	"name": "White Russian",
	"href": "/White_Russian",
	"buildsFrom": [
		{
			"name": "Coffee Liqueur",
			"id": "Coffee Liqueur"
		},
		{
			"name": "Milk",
			"id": "Milk"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Coffee": 1,
		"Alcohol": 1,
		"Milk": 1
	},
	"stats": {
		"spRestore": 660
	},
	"rarity": "Rare",
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
