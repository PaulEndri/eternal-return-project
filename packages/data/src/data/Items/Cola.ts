import Item from '../../types/Item';

export const Cola: Item = {
	"id": 301209,
	"name": "Cola",
	"buildsInto": [
		112402,
		301307,
		301309
	],
	"requirements": {
		"Carbonated Water": 1,
		"Honey": 1
	},
	"stats": {
		"spRestore": 400
	},
	"rarity": "Uncommon",
	"code": "콜라",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"buildsFrom": [
		301107,
		301101
	],
	"displayName": "Cola",
	"apiMetaData": {
		"code": 301209,
		"category": "Consume",
		"type": "Beverage"
	},
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
