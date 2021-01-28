import Item from '../../types/Item';

export const Doll: Item = {
	"id": 205205,
	"name": "Doll",
	"buildsInto": [
		108403,
		110405,
		205302
	],
	"requirements": {
		"Ribbon": 1,
		"Cloth": 1
	},
	"stats": {
		"spRegenRatio": 1,
		"increaseBasicAttackDamage": 0.11
	},
	"rarity": "Uncommon",
	"code": "인형",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Aren't you a little old to be playing with dolls?",
	"buildsFrom": [
		205103,
		401113
	],
	"displayName": "Doll",
	"apiMetaData": {
		"code": 205205,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
