import Item from '../../types/Item';

export const IronBall: Item = {
	"id": 112103,
	"name": "IronBall",
	"buildsInto": [
		104301,
		112202,
		112303,
		204204,
		502206
	],
	"requirements": {},
	"stats": {
		"attackPower": 12,
		"charges": 50
	},
	"rarity": "Common",
	"code": "쇠구슬",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Archery Range": 5,
		"Factory": 7,
		"Forest": 7
	},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [],
	"displayName": "Iron Ball",
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
		3
	],
	"airSupply": false,
	"collectible": 0
}
