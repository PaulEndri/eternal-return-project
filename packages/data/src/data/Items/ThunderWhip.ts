import Item from '../../types/Item';

export const ThunderWhip: Item = {
	"id": 109401,
	"name": "Thunder Whip",
	"buildsFrom": [
		{
			"name": "Bullwhip",
			"id": 109202
		},
		{
			"name": "Gold",
			"id": 401214
		}
	],
	"buildsInto": [],
	"requirements": {
		"Whip": 1,
		"Razor": 1,
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 55,
		"increaseSkillDamageRatio": 0.18
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
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
