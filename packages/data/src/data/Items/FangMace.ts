import Item from '../../types/Item';

export const FangMace: Item = {
	"id": 104401,
	"name": "Fang Mace",
	"buildsFrom": [
		{
			"name": "Morning Star",
			"id": 104301
		},
		{
			"name": "Heated Stone",
			"id": 401215
		}
	],
	"buildsInto": [],
	"requirements": {
		"Hammer": 1,
		"Short Rod": 1,
		"Iron Ball": 1,
		"Stone": 1,
		"Lighter": 1
	},
	"stats": {
		"attackPower": 55,
		"increaseSkillDamage": 31
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 104401,
		"category": "Weapon",
		"type": "Hammer"
	},
	"clientMetaData": {
		"type": "Hammer",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
