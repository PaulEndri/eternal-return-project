import Item from '../../types/Item';

export const IncendiaryBomb: Item = {
	"id": 112302,
	"name": "IncendiaryBomb",
	"buildsFrom": [
		{
			"name": "Molotov Cocktail",
			"id": 112203
		},
		{
			"name": "Ball Lightning",
			"id": 112303
		}
	],
	"buildsInto": [],
	"requirements": {
		"Glass Bottle": 1,
		"Oil": 1,
		"Iron Ball": 1,
		"Battery": 1,
		"Water": 1
	},
	"stats": {
		"attackPower": 70,
		"attackSpeedRatio": 0.5,
		"charges": 50
	},
	"rarity": "Epic",
	"code": "소이탄",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Inflict damage by quickly spreading fire to an area. It'll be hard to extinguish.",
	"displayName": "Incendiary Bomb",
	"apiMetaData": {
		"code": 112302,
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