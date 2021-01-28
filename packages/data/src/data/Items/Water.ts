import Item from '../../types/Item';

export const Water: Item = {
	"id": 301102,
	"name": "Water",
	"buildsInto": [
		201302,
		301201,
		401205,
		401302,
		301203,
		301205,
		301215,
		301216
	],
	"requirements": {},
	"stats": {
		"spRestore": 100
	},
	"rarity": "Common",
	"code": "물",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"buildsFrom": [],
	"displayName": "Water",
	"apiMetaData": {
		"code": 301102,
		"category": "Consume",
		"type": "Beverage"
	},
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 1
}
