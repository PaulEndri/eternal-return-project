import Item from '../../types/Item';

export const Coffee: Item = {
	"id": 301106,
	"name": "Coffee",
	"buildsFrom": [],
	"buildsInto": [
		301206,
		301208,
		301210,
		301304,
		302225
	],
	"requirements": {},
	"stats": {
		"spRestore": 380
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Cemetery": 5,
		"Uptown": 5,
		"Dock": 5
	},
	"foundQuantity": 1,
	"displayName": "Coffee",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301106,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
