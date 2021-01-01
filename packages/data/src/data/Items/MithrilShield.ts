import Item from '../../types/Item';

export const MithrilShield: Item = {
	"id": 203404,
	"name": "MithrilShield",
	"buildsFrom": [
		{
			"name": "Mithril",
			"id": 401304
		},
		{
			"name": "Leather Shield",
			"id": 203201
		}
	],
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
