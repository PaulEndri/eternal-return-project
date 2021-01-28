import Item from '../../types/Item';

export const MilitarySuit: Item = {
	"id": 202205,
	"name": "MilitarySuit",
	"buildsInto": [
		202303,
		202401
	],
	"requirements": {
		"Windbreaker": 1,
		"Branch": 1
	},
	"stats": {
		"maxHp": 50,
		"increaseSkillDamage": 10
	},
	"rarity": "Uncommon",
	"code": "군복",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Like a school uniform, these military uniforms get some people excited! But when you actually see them out in the street...meh.",
	"buildsFrom": [
		202101,
		108101
	],
	"displayName": "Military Suit",
	"apiMetaData": {
		"code": 202205,
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
