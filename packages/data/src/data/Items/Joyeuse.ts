import Item from '../../types/Item';

export const Joyeuse: Item = {
	"id": 120405,
	"name": "Joyeuse",
	"buildsInto": [],
	"requirements": {
		"Needle": 1,
		"Iron Ore": 1,
		"Mithril": 1
	},
	"stats": {
		"attackPower": 75,
		"criticalStrikeDamage": 0.3,
		"moveSpeed": 0.2
	},
	"rarity": "Epic",
	"code": "주와이외즈",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 120201
		},
		{
			"name": "Scissors",
			"id": 401304
		}
	],
	"displayName": "Joyeuse",
	"apiMetaData": {
		"code": 120405,
		"category": "Weapon",
		"type": "Rapier"
	},
	"clientMetaData": {
		"type": "Rapier",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
