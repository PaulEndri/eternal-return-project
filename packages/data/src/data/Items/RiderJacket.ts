import Item from '../../types/Item';

export const RiderJacket: Item = {
	"id": 202301,
	"name": "RiderJacket",
	"buildsInto": [
		202406
	],
	"requirements": {
		"Windbreaker": 1,
		"Leather": 1,
		"Steel Chain": 1
	},
	"stats": {
		"defense": 11,
		"maxHp": 70,
		"increaseSkillDamage": 9
	},
	"rarity": "Rare",
	"code": "라이더자켓",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Worn more often as a fashion statement than for actual riding.",
	"buildsFrom": [
		202202,
		119101
	],
	"displayName": "Rider Jacket",
	"apiMetaData": {
		"code": 202301,
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
