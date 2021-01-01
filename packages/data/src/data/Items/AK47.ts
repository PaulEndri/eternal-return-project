import Item from '../../types/Item';

export const AK47: Item = {
	"id": 117301,
	"name": "AK47",
	"buildsFrom": [
		{
			"name": "STG-44",
			"id": 117201
		},
		{
			"name": "Piano Wire",
			"id": 502104
		}
	],
	"buildsInto": [
		{
			"name": "AK-12",
			"id": 117404
		}
	],
	"requirements": {
		"Fedorova": 1,
		"Gunpowder": 1,
		"Piano Wire": 1
	},
	"stats": {
		"attackPower": 29,
		"charges": 1,
		"sightRange": 1.5,
		"increaseBasicAttackDamage": 2
	},
	"rarity": "Rare",
	"code": "AK-47",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "AK-47",
	"apiMetaData": {
		"code": 117301,
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