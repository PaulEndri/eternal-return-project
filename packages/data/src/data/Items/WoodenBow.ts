import Item from '../../types/Item';

export const WoodenBow: Item = {
	"id": 114201,
	"name": "Wooden Bow",
	"buildsFrom": [
		{
			"name": "Branch",
			"id": 108101
		},
		{
			"name": "Piano Wire",
			"id": 502104
		}
	],
	"buildsInto": [
		{
			"name": "Strong Bow",
			"id": 114301
		},
		{
			"name": "Pellet Bow",
			"id": 114304
		}
	],
	"requirements": {
		"Branch": 1,
		"Piano Wire": 1
	},
	"stats": {
		"attackPower": 26
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A wooden bow. As plain as it seems, you need choice timber to make a usable wooden bow. Plywood is a no go.",
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
