import Item from '../../types/Item';

export const Circlet: Item = {
	"id": 201202,
	"name": "Circlet",
	"buildsInto": [
		201303,
		201401,
		201408
	],
	"requirements": {
		"Hairband": 1,
		"Branch": 1
	},
	"stats": {
		"cooldownReduction": 0.04,
		"defense": 14,
		"maxSp": 270
	},
	"rarity": "Uncommon",
	"code": "머리테",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A simple accessory worn on the head. It looks rather plain.",
	"buildsFrom": [
		201101,
		108101
	],
	"displayName": "Circlet",
	"apiMetaData": {
		"code": 201202,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
