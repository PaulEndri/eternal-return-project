import Item from '../../types/Item';

export const WaterBottle: Item = {
	"id": 301203,
	"name": "WaterBottle",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Water"
		},
		{
			"name": "Scissors",
			"id": "Glass Bottle"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Water": 1,
		"Glass Bottle": 1
	},
	"stats": {
		"spRestore": 350
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Water Bottle",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301203,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
