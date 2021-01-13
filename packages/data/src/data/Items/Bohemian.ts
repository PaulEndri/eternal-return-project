import Item from '../../types/Item';

export const Bohemian: Item = {
	"id": 121401,
	"name": "Bohemian",
	"buildsInto": [],
	"requirements": {
		"Starter Guitar": 1,
		"Battery": 1,
		"Water": 1,
		"Hammer": 1,
		"Gemstone": 1,
		"Playing Cards": 1
	},
	"stats": {
		"attackPower": 50,
		"attackSpeedRatio": 0.2,
		"criticalStrikeChance": 0.2,
		"maxHp": 380,
		"increaseBasicAttackDamage": 2
	},
	"rarity": "Epic",
	"code": "보헤미안",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "\"Bohemian\" was first used to describe a part of the Czech population, but it is now used to represent free spirits.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 121301
		},
		{
			"name": "Scissors",
			"id": 113102
		}
	],
	"displayName": "Bohemian",
	"apiMetaData": {
		"code": 121401,
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
