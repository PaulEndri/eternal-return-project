import Item from '../../types/Item';

export const IceWater: Item = {
	"id": 301216,
	"name": "IceWater",
	"buildsFrom": [
		301103,
		301102
	],
	"buildsInto": [
		302328
	],
	"requirements": {
		"Ice": 1,
		"Water": 1
	},
	"stats": {
		"spRestore": 350
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Ice Water",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301216,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
