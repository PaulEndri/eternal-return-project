import Item from '../../types/Item';

export const Mallet: Item = {
	"id": 108404,
	"name": "Mallet",
	"buildsFrom": [
		{
			"name": "Goblin Bat",
			"id": 108301
		},
		{
			"name": "Motor",
			"id": 401303
		}
	],
	"buildsInto": [],
	"requirements": {
		"Short Rod": 1,
		"Bamboo": 1,
		"Nail": 1,
		"Battery": 1,
		"Piano Wire": 1,
		"Scrap Metal": 1
	},
	"stats": {
		"attackPower": 80,
		"attackSpeedRatio": 0.5,
		"decreaseRecoveryToBasicAttack": 1
	},
	"rarity": "Epic",
	"code": "타구봉",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Mallet",
	"apiMetaData": {
		"code": 108404,
		"category": "Weapon",
		"type": "Bat"
	},
	"clientMetaData": {
		"type": "Bat",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
