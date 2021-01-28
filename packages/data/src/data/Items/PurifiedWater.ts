import Item from '../../types/Item';

export const PurifiedWater: Item = {
	"id": 301308,
	"name": "PurifiedWater",
	"buildsFrom": [
		301201,
		301103
	],
	"buildsInto": [],
	"requirements": {
		"Water": 1,
		"Lighter": 1,
		"Ice": 1
	},
	"stats": {
		"spRestore": 1080
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Purified Water",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301308,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
