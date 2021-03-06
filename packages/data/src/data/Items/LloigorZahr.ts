import Item from '../../types/Item';

export const LloigorZahr: Item = {
	"id": 103502,
	"name": "LloigorZahr",
	"buildsInto": [],
	"requirements": {
		"Kitchen Knife": 1,
		"Rusty Sword": 1,
		"Paper": 1,
		"Lighter": 1,
		"Water": 1
	},
	"stats": {
		"attackPower": 38,
		"attackSpeedRatio": 0.15,
		"increaseSkillDamageRatio": 36
	},
	"rarity": "Epic",
	"code": "로이거 차르",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "You'll love crafting these twin swords, just be careful if you feel wind but the weather isn't windy. Lloigor might be watching.",
	"buildsFrom": [
		103201,
		401302
	],
	"displayName": "Lloigor & Zahr",
	"apiMetaData": {
		"code": 103502,
		"category": "Weapon",
		"type": "DualSword"
	},
	"clientMetaData": {
		"type": "Dual Swords",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
