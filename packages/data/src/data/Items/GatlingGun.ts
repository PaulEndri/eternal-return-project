import Item from '../../types/Item';

export const GatlingGun: Item = {
	"id": 117403,
	"name": "Gatling Gun",
	"buildsFrom": [
		{
			"name": "Machine Gun",
			"id": 117402
		},
		{
			"name": "Oil",
			"id": 401112
		}
	],
	"buildsInto": [],
	"requirements": {
		"Fedorova": 1,
		"Gunpowder": 1,
		"Battery": 1,
		"Piano Wire": 1,
		"Scrap Metal": 1,
		"Oil": 1
	},
	"stats": {
		"attackPower": 50,
		"attackSpeedRatio": 0.15,
		"charges": 2,
		"sightRange": 1.5,
		"increaseBasicAttackDamage": 12
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The world's first machine gun, it fires through several barrels joined together. Can cause catastrophic damage to the enemy in a short period of time.",
	"apiMetaData": {
		"code": 117403,
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
