import Item from '../../types/Item';

export const MountSlicer: Item = {
	"id": 101402,
	"name": "MountSlicer",
	"buildsFrom": [
		{
			"name": "Rose Knife",
			"id": 101301
		},
		{
			"name": "Ash",
			"id": 401210
		}
	],
	"buildsInto": [],
	"requirements": {
		"Kitchen Knife": 1,
		"Branch": 1,
		"Flower": 1,
		"Paper": 1,
		"Lighter": 1
	},
	"stats": {
		"attackPower": 33,
		"cooldownReduction": 0.1,
		"moveSpeed": 0.1,
		"moveSpeedOutOfCombat": 0.1,
		"increaseSkillDamage": 35
	},
	"rarity": "Epic",
	"code": "파산검",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Mount Slicer",
	"apiMetaData": {
		"code": 101402,
		"category": "Weapon",
		"type": "OneHandSword"
	},
	"clientMetaData": {
		"type": "Dagger",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
