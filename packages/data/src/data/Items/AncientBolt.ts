import Item from '../../types/Item';

export const AncientBolt: Item = {
	"id": 114401,
	"name": "AncientBolt",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Stallion Bow"
		},
		{
			"name": "Scissors",
			"id": "Bamboo"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Bow": 1,
		"Rubber": 1,
		"Gunpowder": 1,
		"Stallion Medal": 1,
		"Bamboo": 1
	},
	"stats": {
		"attackPower": 55,
		"increaseBasicAttackDamage": 40
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"displayName": "Ancient bolt",
	"clientMetaData": {
		"type": "Bow",
		"category": "Weapon"
	},
	"apiMetaData": {
		"code": 114401,
		"type": "Bow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
