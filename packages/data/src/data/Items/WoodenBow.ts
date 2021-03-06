import Item from '../../types/Item';

export const WoodenBow: Item = {
	"id": 114201,
	"name": "WoodenBow",
	"buildsInto": [
		114301,
		114304
	],
	"requirements": {
		"Branch": 1,
		"Piano Wire": 1
	},
	"stats": {
		"attackPower": 26
	},
	"rarity": "Uncommon",
	"code": "목궁",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A wooden bow. As plain as it seems, you need choice timber to make a usable wooden bow. Plywood is a no go.",
	"buildsFrom": [
		108101,
		502104
	],
	"displayName": "Wooden Bow",
	"apiMetaData": {
		"code": 114201,
		"category": "Weapon",
		"type": "Bow"
	},
	"clientMetaData": {
		"type": "Bow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
