import Item from '../../types/Item';

export const TheWall: Item = {
	"id": 121406,
	"name": "TheWall",
	"buildsInto": [],
	"requirements": {
		"Starter Guitar": 1,
		"Battery": 1,
		"Water": 1,
		"Bamboo": 1,
		"Chalk": 1,
		"Stone": 1
	},
	"stats": {
		"attackPower": 70,
		"attackSpeedRatio": 0.18,
		"increaseBasicAttackDamage": 2
	},
	"rarity": "Epic",
	"code": "더월",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The test subjects on this island might as well just be, all in all, bricks in a wall.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 121305
		},
		{
			"name": "Scissors",
			"id": 401206
		}
	],
	"displayName": "The Wall",
	"apiMetaData": {
		"code": 121406,
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
