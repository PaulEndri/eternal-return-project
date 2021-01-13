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
		"increaseSkillDamageRatio": 0.18
	},
	"rarity": "Rare",
	"code": "뇌룡편",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 109202
		},
		{
			"name": "Scissors",
			"id": 401214
		}
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
