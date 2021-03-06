import Item from '../../types/Item';

export const WindWhip: Item = {
	"id": 109301,
	"name": "WindWhip",
	"buildsInto": [
		109403,
		109501
	],
	"requirements": {
		"Whip": 1,
		"Stallion Medal": 1,
		"Fan": 1
	},
	"stats": {
		"attackPower": 24,
		"increaseSkillDamageRatio": 20
	},
	"rarity": "Rare",
	"code": "바람채찍",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		109201,
		205105
	],
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
