import Item from '../../types/Item';

export const LongCrossbow: Item = {
	"id": 115201,
	"name": "Long Crossbow",
	"buildsFrom": [
		{
			"name": "Short Crossbow",
			"id": 115202
		},
		{
			"name": "Piano Wire",
			"id": 502104
		}
	],
	"buildsInto": [
		{
			"name": "Power Crossbow",
			"id": 115301
		},
		{
			"name": "Heavy Crossbow",
			"id": 115303
		}
	],
	"requirements": {
		"Short Crossbow": 1,
		"Piano Wire": 1
	},
	"stats": {
		"attackPower": 30
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A long range weapon that can shoot further than a standard bow. During the Chosun Period, there are records of shots landing from as far as 600 steps away.",
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
