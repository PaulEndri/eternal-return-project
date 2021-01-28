import Item from '../../types/Item';

export const RockersJacket: Item = {
	"id": 202406,
	"name": "RockersJacket",
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
		"defense": 11,
		"moveSpeedOutOfCombat": 0.1,
		"increaseSkillDamage": 11
	},
	"rarity": "Epic",
	"code": "락커의자켓",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "There's something burning in my HEART. Today, I can do anything.",
	"buildsFrom": [
		202301,
		502206
	],
	"displayName": "Rocker's Jacket",
	"apiMetaData": {
		"code": 202406,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
