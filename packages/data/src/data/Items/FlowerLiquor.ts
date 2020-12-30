import Item from '../../types/Item';

export const FlowerLiquor: Item = {
	"id": "Flower Liquor",
	"name": "Flower Liquor",
	"href": "/Flower_Liquor",
	"buildsFrom": [
		{
			"name": "Baijiu",
			"id": "Baijiu"
		},
		{
			"name": "Flower",
			"id": 205102
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
