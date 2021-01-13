import Item from '../../types/Item';

export const KaoliangLiquor: Item = {
	"id": 301301,
	"name": "KaoliangLiquor",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Baijiu"
		},
		{
			"name": "Scissors",
			"id": "Lighter"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Alcohol": 1,
		"Lighter": 2
	},
	"stats": {
		"spRestore": 1080
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"displayName": "Kaoliang Liquor",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301301,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
