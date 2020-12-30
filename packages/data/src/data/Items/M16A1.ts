import Item from '../../types/Item';

export const M16A1: Item = {
	"id": 117401,
	"name": "M16A1",
	"buildsFrom": [
		{
			"name": "STG-44",
			"id": "STG-44"
		},
		{
			"name": "Leather",
			"id": 401103
		}
	],
	"buildsInto": [
		{
			"name": "XCR",
			"id": 117405
		}
	],
	"requirements": {
		"Fedorova": 1,
		"Gunpowder": 1,
		"Leather": 1
	},
	"stats": {
		"attackPower": 25,
		"charges": 3,
		"sightRange": 1.5,
		"increaseBasicAttackDamage": 4
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 117401,
		"category": "Weapon",
		"type": "AssaultRifle"
	},
	"clientMetaData": {
		"type": "AssaultRifle",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
