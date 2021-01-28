import Item from '../../types/Item';

export const Baijiu: Item = {
	"id": 301204,
	"name": "Baijiu",
	"buildsFrom": [
		401111,
		401107
	],
	"buildsInto": [
		301301,
		301303,
		301305
	],
	"requirements": {
		"Alcohol": 1,
		"Lighter": 1
	},
	"stats": {
		"spRestore": 1000
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"displayName": "Baijiu",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301204,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
