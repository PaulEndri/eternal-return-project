import Item from '../../types/Item';

export const WindWhip: Item = {
	"id": 109301,
	"name": "WindWhip",
	"buildsFrom": [
		{
			"name": "Rope Cuffs",
			"id": 109201
		},
		{
			"name": "Fan",
			"id": 205105
		}
	],
	"buildsInto": [
		{
			"name": "Gleipnir",
			"id": 109403
		},
		{
			"name": "Whip of Nine Bloody Tails",
			"id": 109501
		}
	],
	"requirements": {
		"Whip": 1,
		"Stallion Medal": 1,
		"Fan": 1
	},
	"stats": {
		"attackPower": 24,
		"increaseSkillDamage": 20
	},
	"rarity": "Rare",
	"code": "바람채찍",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Wind Whip",
	"apiMetaData": {
		"code": 109301,
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
