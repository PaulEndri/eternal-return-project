import Item from '../../types/Item';

export const TeenSpirit: Item = {
	"id": 121407,
	"name": "TeenSpirit",
	"buildsInto": [],
	"requirements": {
		"Starter Guitar": 1,
		"Battery": 1,
		"Water": 1,
		"Oil": 1,
		"Buddhist Scripture": 1,
		"Monk's Robe": 1
	},
	"stats": {
		"attackPower": 10,
		"attackSpeedRatio": 0.25,
		"increaseBasicAttackDamage": 20
	},
	"rarity": "Epic",
	"code": "틴스피릿",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Humans shine the most as teens. This shining aura fades slowly, but inevitably, as times passes by.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 121306
		},
		{
			"name": "Scissors",
			"id": 205207
		}
	],
	"displayName": "Teen Spirit",
	"apiMetaData": {
		"code": 121407,
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
