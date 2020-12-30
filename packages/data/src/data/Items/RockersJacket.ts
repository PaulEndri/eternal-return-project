import Item from '../../types/Item';

export const RockersJacket: Item = {
	"id": "Rocker's Jacket",
	"name": "Rocker's Jacket",
	"href": "/Rocker's_Jacket",
	"buildsFrom": [
		{
			"name": "Rider Jacket",
			"id": 202301
		},
		{
			"name": "Clang Clatter",
			"id": 502206
		}
	],
	"buildsInto": [],
	"requirements": {
		"Windbreaker": 1,
		"Leather": 1,
		"Steel Chain": 1,
		"Can": 1,
		"Iron Ball": 1
	},
	"stats": {
		"attackPower": 30,
		"decreaseRecoveryToSkill": 1,
		"defense": 11,
		"moveSpeedOutOfCombat": 0.3,
		"preventBasicAttackDamaged": 15
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "There's something burning in my HEART. Today, I can do anything.",
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
