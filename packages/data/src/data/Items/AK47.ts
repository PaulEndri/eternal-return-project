import Item from '../../types/Item';

export const AK47: Item = {
	"id": 117301,
	"name": "AK47",
	"buildsInto": [
		117404
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
		"preventBasicAttackDamaged": 2
	},
	"rarity": "Rare",
	"code": "AK-47",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		117201,
		502104
	],
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
