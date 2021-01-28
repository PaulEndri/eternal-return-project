import Item from '../../types/Item';

export const Warhammer: Item = {
	"id": 104201,
	"name": "Warhammer",
	"buildsInto": [
		104301,
		104302,
		104405
	],
	"requirements": {
		"Hammer": 1,
		"Short Rod": 1
	},
	"stats": {
		"attackPower": 40
	},
	"rarity": "Uncommon",
	"code": "워해머",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It's like a gift set of close combat weapons! Includes a hammer for striking, a spear for piercing, and a sword for slashing.",
	"buildsFrom": [
		104101,
		108102
	],
	"displayName": "Warhammer",
	"apiMetaData": {
		"code": 104201,
		"category": "Weapon",
		"type": "Hammer"
	},
	"clientMetaData": {
		"type": "Hammer",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
