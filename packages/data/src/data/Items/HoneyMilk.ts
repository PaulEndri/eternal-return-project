import Item from '../../types/Item';

export const HoneyMilk: Item = {
	"id": 301211,
	"name": "HoneyMilk",
	"buildsFrom": [
		301108,
		301101
	],
	"buildsInto": [],
	"requirements": {
		"Milk": 1,
		"Honey": 1
	},
	"stats": {
		"spRestore": 530
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Honey Milk",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301211,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
