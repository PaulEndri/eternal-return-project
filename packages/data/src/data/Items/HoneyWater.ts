import Item from '../../types/Item';

export const HoneyWater: Item = {
	"id": 301215,
	"name": "HoneyWater",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Honey"
		},
		{
			"name": "Scissors",
			"id": "Water"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Honey": 1,
		"Water": 1
	},
	"stats": {
		"spRestore": 400
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Honey Water",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301215,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
