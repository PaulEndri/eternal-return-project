import Item from '../../types/Item';

export const ThunderWhip: Item = {
	"id": 109401,
	"name": "ThunderWhip",
	"buildsInto": [],
	"requirements": {
		"Whip": 1,
		"Razor": 1,
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 30,
		"preventSkillDamagedRatio": 0.2
	},
	"rarity": "Rare",
	"code": "뇌룡편",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		109202,
		401214
	],
	"displayName": "Thunder Whip",
	"apiMetaData": {
		"code": 109401,
		"category": "Weapon",
		"type": "Whip"
	},
	"clientMetaData": {
		"type": "Whip",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
