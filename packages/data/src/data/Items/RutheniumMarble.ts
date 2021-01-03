import Item from '../../types/Item';

export const RutheniumMarble: Item = {
	"id": 112501,
	"name": "RutheniumMarble",
	"buildsFrom": [
		{
			"name": "Spiky Bouncy Ball",
			"id": 112403
		},
		{
			"name": "Gold",
			"id": 401214
		}
	],
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
		"decreaseRecoveryToSkill": 1,
		"increaseSkillDamageRatio": 0.2
	},
	"rarity": "Epic",
	"code": "루테늄구슬",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Made out of Ruthenium, which is the hardest element among the platinum metals. It also has applications as a superconductor.",
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
