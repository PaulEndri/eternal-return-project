import Item from '../../types/Item';

export const BoilingWater: Item = {
	"id": 301201,
	"name": "BoilingWater",
	"buildsInto": [
		112304,
		301302,
		301304,
		301308,
		301310,
		302301,
		302307,
		302313,
		302314,
		302318
	],
	"requirements": {
		"Water": 1,
		"Lighter": 1
	},
	"stats": {
		"spRestore": 200
	},
	"rarity": "Uncommon",
	"code": "뜨거운물",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"buildsFrom": [
		301102,
		401107
	],
	"displayName": "Boiling Water",
	"apiMetaData": {
		"code": 301201,
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
