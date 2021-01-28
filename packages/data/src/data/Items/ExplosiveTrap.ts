import Item from '../../types/Item';

export const ExplosiveTrap: Item = {
	"id": 502306,
	"name": "ExplosiveTrap",
	"buildsFrom": [
		502103,
		401121
	],
	"buildsInto": [
		502403,
		502406
	],
	"requirements": {
		"Mousetrap": 1,
		"Gunpowder": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"displayName": "Explosive Trap",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502306,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
