import Item from '../../types/Item';

export const LeatherShield: Item = {
	"id": 203201,
	"name": "LeatherShield",
	"buildsInto": [
		203401,
		203404,
		203409,
		203409
	],
	"requirements": {
		"Turtle Shell": 1,
		"Leather": 1
	},
	"stats": {
		"attackPower": 10,
		"defense": 10
	},
	"rarity": "Uncommon",
	"code": "가죽방패",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Strong, but flexible. Not the best for blocking sharp attacks, but it's better than nothing.",
	"buildsFrom": [
		401104,
		401103
	],
	"displayName": "Leather Shield",
	"apiMetaData": {
		"code": 203201,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
