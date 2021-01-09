import Item from '../../types/Item';

export const M16A1: Item = {
	"id": 117401,
	"name": "M16A1",
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
	"code": "M16A1",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "STG-44",
			"id": 117201
		},
		{
			"name": "Leather",
			"id": 401103
		}
	],
	"displayName": "M16A1",
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
