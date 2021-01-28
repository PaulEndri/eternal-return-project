import Item from '../../types/Item';

export const ApricotSword: Item = {
	"id": 120301,
	"name": "ApricotSword",
	"buildsInto": [
		120401,
		120403,
		120404
	],
	"requirements": {
		"Needle": 1,
		"Iron Ore": 1,
		"Flower": 1,
		"Playing Cards": 1
	},
	"stats": {
		"attackPower": 21,
		"criticalStrikeChance": 0.1,
		"criticalStrikeDamage": 0.25,
		"lifeSteal": 0.1
	},
	"rarity": "Rare",
	"code": "매화검",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		120201,
		205203
	],
	"displayName": "Apricot Sword",
	"apiMetaData": {
		"code": 120301,
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
