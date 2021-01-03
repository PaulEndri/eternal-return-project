import Item from '../../types/Item';

export const WhiteClawPunch: Item = {
	"id": 110411,
	"name": "WhiteClawPunch",
	"buildsFrom": [
		{
			"name": "Glass Knuckles",
			"id": 110403
		},
		{
			"name": "White Powder",
			"id": 401206
		}
	],
	"buildsInto": [],
	"requirements": {
		"Brass Knuckles": 1,
		"Iron Ore": 1,
		"Glass Bottle": 1,
		"Stone": 2,
		"Chalk": 1
	},
	"stats": {
		"attackPower": 55,
		"criticalStrikeChance": 0.2
	},
	"rarity": "Epic",
	"code": "소수",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "White Claw Punch",
	"apiMetaData": {
		"code": 110411,
		"category": "Weapon",
		"type": "Glove"
	},
	"clientMetaData": {
		"type": "Glove",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
