import Item from '../../types/Item';

export const LeatherJacket: Item = {
	"id": 202202,
	"name": "LeatherJacket",
	"buildsInto": [
		202301
	],
	"requirements": {
		"Windbreaker": 1,
		"Leather": 1
	},
	"stats": {
		"defense": 8,
		"maxHp": 70,
		"increaseSkillDamage": 6
	},
	"rarity": "Uncommon",
	"code": "가죽자켓",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A reliable jacket that doesn't tear easily. Useful in most weather conditions.",
	"buildsFrom": [
		202101,
		401103
	],
	"displayName": "Leather Jacket",
	"apiMetaData": {
		"code": 202202,
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
