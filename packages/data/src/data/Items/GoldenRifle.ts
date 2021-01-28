import Item from '../../types/Item';

export const GoldenRifle: Item = {
	"id": 118401,
	"name": "GoldenRifle",
	"buildsInto": [
		118405,
		118501
	],
	"requirements": {
		"Long Rifle": 1,
		"Laser Pointer": 1,
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 56,
		"moveSpeed": -0.07,
		"sightRange": 2.5,
		"preventSkillDamagedRatio": 0.18
	},
	"rarity": "Rare",
	"code": "금교전",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A rifle accented with gold. High in both accuracy, destructive power, and flashiness.",
	"buildsFrom": [
		118201,
		401214
	],
	"displayName": "Golden Rifle",
	"apiMetaData": {
		"code": 118401,
		"category": "Weapon",
		"type": "SniperRifle"
	},
	"clientMetaData": {
		"type": "SniperRifle",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
