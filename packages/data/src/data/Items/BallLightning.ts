import Item from '../../types/Item';

export const BallLightning: Item = {
	"id": 112303,
	"name": "BallLightning",
	"buildsInto": [
		{
			"name": "Incendiary Bomb",
			"id": 112302
		}
	],
	"requirements": {
		"Iron Ball": 1,
		"Battery": 1,
		"Water": 1
	},
	"stats": {
		"attackPower": 24,
		"attackSpeedRatio": 0.2,
		"charges": 50
	},
	"rarity": "Rare",
	"code": "볼라이트닝",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "You can knock out your enemies by throwing the hammer, but it's your choice to run or keep fighting.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 112103
		},
		{
			"name": "Scissors",
			"id": 401205
		}
	],
	"displayName": "Ball Lightning",
	"apiMetaData": {
		"code": 112303,
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
