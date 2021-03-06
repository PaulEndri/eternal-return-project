import Item from '../../types/Item';

export const Windbreaker: Item = {
	"id": 202101,
	"name": "Windbreaker",
	"buildsInto": [
		202202,
		202205
	],
	"requirements": {},
	"stats": {
		"maxHp": 50,
		"increaseSkillDamage": 3
	},
	"rarity": "Common",
	"code": "바람막이",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"School": 7,
		"Hotel": 7,
		"Uptown": 6
	},
	"foundQuantity": 1,
	"description": "A jumper that keeps you warm by blocking out the wind. It works best when it blocks the wind completely, so make sure to wear it properly!",
	"buildsFrom": [],
	"displayName": "Windbreaker",
	"apiMetaData": {
		"code": 202101,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"droppedFrom": [
		4
	],
	"airSupply": false,
	"collectible": 0
}
