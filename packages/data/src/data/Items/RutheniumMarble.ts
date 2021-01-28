import Item from '../../types/Item';

export const RutheniumMarble: Item = {
	"id": 112501,
	"name": "RutheniumMarble",
	"buildsInto": [],
	"requirements": {
		"Rubber": 1,
		"Water": 1,
		"Lighter": 1,
		"Nail": 1,
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 80,
		"charges": 50,
		"preventSkillDamagedRatio": 0.26
	},
	"rarity": "Epic",
	"code": "루테늄구슬",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Made out of Ruthenium, which is the hardest element among the platinum metals. It also has applications as a superconductor.",
	"buildsFrom": [
		112403,
		401214
	],
	"displayName": "Ruthenium Marble",
	"apiMetaData": {
		"code": 112501,
		"category": "Weapon",
		"type": "HighAngleFire"
	},
	"clientMetaData": {
		"type": "Throw",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
