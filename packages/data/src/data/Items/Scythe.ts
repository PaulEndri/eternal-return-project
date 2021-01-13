import Item from '../../types/Item';

export const Scythe: Item = {
	"id": 105404,
	"name": "Scythe",
	"buildsInto": [],
	"requirements": {
		"Pickaxe": 2,
		"Steel Chain": 1,
		"Short Rod": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 130,
		"attackRange": 1,
		"increaseSkillDamageRatio": 0.18
	},
	"rarity": "Epic",
	"code": "스퀴테",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 105302
		},
		{
			"name": "Scissors",
			"id": 401214
		}
	],
	"displayName": "Scythe",
	"apiMetaData": {
		"code": 105404,
		"category": "Weapon",
		"type": "Axe"
	},
	"clientMetaData": {
		"type": "Axe",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
