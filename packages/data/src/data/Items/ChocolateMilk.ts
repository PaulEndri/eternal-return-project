import Item from '../../types/Item';

export const ChocolateMilk: Item = {
	"id": 301214,
	"name": "ChocolateMilk",
	"buildsFrom": [
		302119,
		301108
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
	"displayName": "Chocolate Milk",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301214,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
