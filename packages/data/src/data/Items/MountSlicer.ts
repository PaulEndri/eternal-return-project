import Item from '../../types/Item';

export const MountSlicer: Item = {
	"id": 101402,
	"name": "MountSlicer",
	"buildsInto": [],
	"requirements": {
		"Kitchen Knife": 1,
		"Branch": 1,
		"Flower": 1,
		"Paper": 1,
		"Lighter": 1
	},
	"stats": {
		"attackPower": 38,
		"lifeSteal": 0.1,
		"moveSpeed": 0.1,
		"moveSpeedOutOfCombat": 0.1,
		"increaseSkillDamageRatio": 30
	},
	"rarity": "Epic",
	"code": "파산검",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		101301,
		401210
	],
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
