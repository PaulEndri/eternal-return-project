import Item from '../../types/Item';

export const HighExplosiveGrenade: Item = {
	"id": 112404,
	"name": "HighExplosiveGrenade",
	"buildsFrom": [
		{
			"name": "Grenade",
			"id": 112202
		},
		{
			"name": "RDX",
			"id": 502307
		}
	],
	"buildsInto": [
		{
			"name": "Grenade of Antioch",
			"id": 112305
		}
	],
	"requirements": {
		"Iron Ball": 1,
		"Gunpowder": 2,
		"Piano Wire": 1,
		"Scrap Metal": 1
	},
	"stats": {
		"attackPower": 56,
		"charges": 8,
		"increaseBasicAttackDamage": 60
	},
	"rarity": "Epic",
	"code": "고폭수류탄",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It hurts when you touch it, but it even hurts more when it explodes next to you.",
	"displayName": "High Explosive Grenade",
	"apiMetaData": {
		"code": 112404,
		"category": "Weapon",
		"type": "HighAngleFire"
	},
	"clientMetaData": {
		"type": "Throw",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
