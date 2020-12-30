import Item from '../../types/Item';

export const XCR: Item = {
	"id": 117405,
	"name": "XCR",
	"buildsFrom": [
		{
			"name": "M16A1",
			"id": 117401
		},
		{
			"name": "Magazine",
			"id": 205303
		}
	],
	"buildsInto": [],
	"requirements": {
		"Fedorova": 1,
		"Gunpowder": 1,
		"Leather": 1,
		"Box": 1,
		"Scrap Metal": 1,
		"Hammer": 1
	},
	"stats": {
		"attackPower": 60,
		"charges": 3,
		"maxHp": 420,
		"sightRange": 1.5,
		"increaseBasicAttackDamage": 10
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 117405,
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
