import Item from '../../types/Item';

export const IronBall: Item = {
	"id": 112103,
	"name": "Iron Ball",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Morning Star",
			"id": 104301
		},
		{
			"name": "Grenade",
			"id": 112202
		},
		{
			"name": "Ball Lightning",
			"id": 112303
		},
		{
			"name": "Heelys",
			"id": 204204
		},
		{
			"name": "Clang Clatter",
			"id": 502206
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 12,
		"charges": 50
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Archery Range": 5,
		"Factory": 7,
		"Forest": 7
	},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 112103,
		"category": "Weapon",
		"type": "HighAngleFire"
	},
	"clientMetaData": {
		"type": "Throw",
		"category": "Weapon"
	},
	"droppedFrom": [
		{
			"name": "Boar",
			"id": 3
		}
	],
	"airSupply": false,
	"collectible": 0
}
