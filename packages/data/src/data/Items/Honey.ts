import Item from '../../types/Item';

export const Honey: Item = {
	"id": 301101,
	"name": "Honey",
	"buildsInto": [
		301209,
		301211,
		301215,
		301302,
		302201,
		302232,
		302315
	],
	"requirements": {},
	"stats": {
		"spRestore": 250
	},
	"rarity": "Common",
	"code": "꿀",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Alley": 5,
		"Avenue": 6,
		"Forest": 6
	},
	"foundQuantity": 2,
	"buildsFrom": [],
	"displayName": "Honey",
	"apiMetaData": {
		"code": 301101,
		"category": "Consume",
		"type": "Beverage"
	},
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
