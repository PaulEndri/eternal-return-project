import Item from '../../types/Item';

export const STG44: Item = {
	"id": 117201,
	"name": "STG-44",
	"buildsFrom": [
		{
			"name": "Fedorova",
			"id": 117101
		},
		{
			"name": "Gunpowder",
			"id": 401121
		}
	],
	"buildsInto": [
		{
			"name": "AK-47",
			"id": 117301
		},
		{
			"name": "M16A1",
			"id": 117401
		},
		{
			"name": "Machine Gun",
			"id": 117402
		}
	],
	"requirements": {
		"Fedorova": 1,
		"Gunpowder": 1
	},
	"stats": {
		"attackPower": 18,
		"charges": 2,
		"sightRange": 1.5,
		"increaseBasicAttackDamage": 2
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"apiMetaData": {
		"code": 117201,
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
