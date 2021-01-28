import Item from '../../types/Item';

export const DivineDualSwords: Item = {
	"id": 103401,
	"name": "DivineDualSwords",
	"buildsInto": [],
	"requirements": {
		"Kitchen Knife": 1,
		"Rusty Sword": 1,
		"Fountain Pen": 1,
		"Paper": 1,
		"Nail": 1
	},
	"stats": {
		"attackPower": 49,
		"attackSpeedRatio": 0.1,
		"increaseBasicAttackDamage": 0.18
	},
	"rarity": "Epic",
	"code": "이천일류",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A swordsmanship technique created and refined by Miyamoto Musashi. It involves using two swords, a shortsword in one hand and a longsword in the other.",
	"buildsFrom": [
		103301,
		401101
	],
	"displayName": "Divine Dual Swords",
	"apiMetaData": {
		"code": 103401,
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
