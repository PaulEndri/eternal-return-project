import Item from '../../types/Item';

export const LongCrossbow: Item = {
	"id": 115201,
	"name": "LongCrossbow",
	"buildsInto": [
		115301,
		115303
	],
	"requirements": {
		"Short Crossbow": 1,
		"Piano Wire": 1
	},
	"stats": {
		"attackPower": 30
	},
	"rarity": "Uncommon",
	"code": "쇠뇌",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A long range weapon that can shoot further than a standard bow. During the Chosun Period, there are records of shots landing from as far as 600 steps away.",
	"buildsFrom": [
		115101,
		502104
	],
	"displayName": "Long Crossbow",
	"apiMetaData": {
		"code": 115201,
		"category": "Weapon",
		"type": "CrossBow"
	},
	"clientMetaData": {
		"type": "CrossBow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
