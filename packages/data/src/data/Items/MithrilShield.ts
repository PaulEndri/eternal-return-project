import Item from '../../types/Item';

export const MithrilShield: Item = {
	"id": 203404,
	"name": "MithrilShield",
	"buildsInto": [],
	"requirements": {
		"Mithril": 1,
		"Turtle Shell": 1,
		"Leather": 1
	},
	"stats": {
		"attackPower": 30,
		"attackSpeedRatio": 0.12,
		"defense": 30,
		"moveSpeed": 0.1
	},
	"rarity": "Epic",
	"code": "미스릴방패",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A shield made with Mithril. It's light, but the strength is beyond imagination.",
	"buildsFrom": [
		401304,
		203201
	],
	"displayName": "Mithril Shield",
	"apiMetaData": {
		"code": 203404,
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
