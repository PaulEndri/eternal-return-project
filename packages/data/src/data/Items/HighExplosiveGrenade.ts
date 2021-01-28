import Item from '../../types/Item';

export const HighExplosiveGrenade: Item = {
	"id": 112404,
	"name": "HighExplosiveGrenade",
	"buildsInto": [
		112305
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
		"preventBasicAttackDamaged": 60
	},
	"rarity": "Epic",
	"code": "고폭수류탄",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It hurts when you touch it, but it even hurts more when it explodes next to you.",
	"buildsFrom": [
		112202,
		502307
	],
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
