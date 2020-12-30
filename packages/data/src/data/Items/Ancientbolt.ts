import Item from '../../types/Item';

export const Ancientbolt: Item = {
	"id": 114401,
	"name": "Ancient bolt",
	"href": "/Ancient_bolt",
	"buildsFrom": [
		{
			"name": "Stallion Bow",
			"id": 114302
		},
		{
			"name": "Bamboo",
			"id": 108103
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
