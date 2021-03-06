import Item from '../../types/Item';

export const StallionBow: Item = {
	"id": 114302,
	"name": "StallionBow",
	"buildsInto": [
		114401,
		114401
	],
	"requirements": {
		"Bow": 1,
		"Rubber": 1,
		"Gunpowder": 1,
		"Stallion Medal": 1
	},
	"stats": {
		"attackPower": 20,
		"preventBasicAttackDamaged": 25
	},
	"rarity": "Rare",
	"code": "국궁",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A traditional Korean bow that can kill a tiger with a single arrow.",
	"buildsFrom": [
		114303,
		401109
	],
	"displayName": "Stallion Bow",
	"apiMetaData": {
		"code": 114302,
		"category": "Weapon",
		"type": "Bow"
	},
	"clientMetaData": {
		"type": "Bow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
