import Item from '../../types/Item';

export const TeenSpirit: Item = {
	"id": 121407,
	"name": "Teen Spirit",
	"buildsFrom": [
		{
			"name": "Wild Horse",
			"id": 121306
		},
		{
			"name": "Buddha Sarira",
			"id": 205207
		}
	],
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Humans shine the most as teens. This shining aura fades slowly, but inevitably, as times passes by.",
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
