import Item from '../../types/Item';

export const Lemonade: Item = {
	"id": "Lemonade",
	"name": "Lemonade",
	"href": "/Lemonade",
	"buildsFrom": [
		{
			"name": "Carbonated Water",
			"id": 301107
		},
		{
			"name": "Lemon",
			"id": "Lemon"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Carbonated Water": 1,
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
