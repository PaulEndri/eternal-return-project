import Item from '../../types/Item';

export const Soju: Item = {
	"id": 301205,
	"name": "Soju",
	"buildsFrom": [
		{
			"name": "Alcohol",
			"id": 401111
		},
		{
			"name": "Water",
			"id": 301102
		}
	],
	"buildsInto": [],
	"requirements": {
		"Alcohol": 1,
		"Water": 1
	},
	"stats": {
		"spRestore": 350
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Soju",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301205,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
