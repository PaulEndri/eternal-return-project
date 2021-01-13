import Item from '../../types/Item';

export const FlowerLiquor: Item = {
	"id": 301303,
	"name": "FlowerLiquor",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Baijiu"
		},
		{
			"name": "Scissors",
			"id": "Flower"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Alcohol": 1,
		"Lighter": 1,
		"Flower": 1
	},
	"stats": {
		"spRestore": 500
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 5,
	"displayName": "Flower Liquor",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301303,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
