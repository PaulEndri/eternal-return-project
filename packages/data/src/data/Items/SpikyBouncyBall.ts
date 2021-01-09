import Item from '../../types/Item';

export const SpikyBouncyBall: Item = {
	"id": 112403,
	"name": "SpikyBouncyBall",
	"buildsInto": [
		{
			"name": "Ruthenium Marble",
			"id": 112501
		}
	],
	"requirements": {
		"Rubber": 1,
		"Water": 1,
		"Lighter": 1,
		"Nail": 1
	},
	"stats": {
		"attackPower": 36,
		"charges": 50,
		"decreaseRecoveryToSkill": 1
	},
	"rarity": "Rare",
	"code": "가시탱탱볼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A rubber ball with sharp fragments on the surface. It hurts. Also, don't underestimate its bouncing capability!",
	"buildsFrom": [
		{
			"name": "Flubber",
			"id": 112304
		},
		{
			"name": "Nail",
			"id": 401101
		}
	],
	"displayName": "Spiky Bouncy Ball",
	"apiMetaData": {
		"code": 112403,
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
