import Item from '../../types/Item';

export const Chalk: Item = {
	"id": 113104,
	"name": "Chalk",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "White Powder",
			"id": 401206
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
		"School": 6,
		"Factory": 7,
		"Chapel": 6
	},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 113104,
		"category": "Weapon",
		"type": "DirectFire"
	},
	"clientMetaData": {
		"type": "Shuriken",
		"category": "Weapon"
	},
	"droppedFrom": [
		{
			"name": "Bat",
			"id": 2
		}
	],
	"airSupply": false,
	"collectible": 0
}
