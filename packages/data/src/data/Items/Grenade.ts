import Item from '../../types/Item';

export const Grenade: Item = {
	"id": 112202,
	"name": "Grenade",
	"buildsInto": [
		112404
	],
	"requirements": {
		"Iron Ball": 1,
		"Gunpowder": 1
	},
	"stats": {
		"attackPower": 25,
		"charges": 8,
		"preventBasicAttackDamaged": 20
	},
	"rarity": "Uncommon",
	"code": "수류탄",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Be careful! The moment you relax and forget you're carrying a grenade is the moment that you become a victim. Boom.",
	"buildsFrom": [
		112103,
		401121
	],
	"displayName": "Grenade",
	"apiMetaData": {
		"code": 112202,
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
