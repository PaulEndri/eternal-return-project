import Item from '../../types/Item';

export const Soju: Item = {
	"id": 301205,
	"name": "Soju",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Alcohol"
		},
		{
			"name": "Scissors",
			"id": "Water"
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
