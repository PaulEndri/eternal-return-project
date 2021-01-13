import Item from '../../types/Item';

export const KingV: Item = {
	"id": 121303,
	"name": "KingV",
	"buildsInto": [
		{
			"name": "Purple Haze",
			"id": 121403
		}
	],
	"requirements": {
		"Starter Guitar": 1,
		"Pickaxe": 1,
		"Gemstone": 1,
		"Scissors": 1
	},
	"stats": {
		"attackPower": 13,
		"increaseSkillDamageRatio": 0.16
	},
	"rarity": "Rare",
	"code": "King-V",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "This guitar has an unconventional V shape. Although it was sensational at release, it didn't see huge popularity.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 121201
		},
		{
			"name": "Scissors",
			"id": 101101
		}
	],
	"displayName": "King-V",
	"apiMetaData": {
		"code": 121303,
		"category": "Weapon",
		"type": "Guitar"
	},
	"clientMetaData": {
		"type": "Guitar",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
