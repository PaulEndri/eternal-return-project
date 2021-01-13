import Item from '../../types/Item';

export const RopeCuffs: Item = {
	"id": 109201,
	"name": "RopeCuffs",
	"buildsInto": [
		{
			"name": "Wind Whip",
			"id": 109301
		}
	],
	"requirements": {
		"Whip": 1,
		"Stallion Medal": 1
	},
	"stats": {
		"attackPower": 24,
		"increaseSkillDamage": 6
	},
	"rarity": "Uncommon",
	"code": "오랏줄",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 109101
		},
		{
			"name": "Scissors",
			"id": 401109
		}
	],
	"displayName": "Rope Cuffs",
	"apiMetaData": {
		"code": 109201,
		"category": "Weapon",
		"type": "Whip"
	},
	"clientMetaData": {
		"type": "Whip",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
