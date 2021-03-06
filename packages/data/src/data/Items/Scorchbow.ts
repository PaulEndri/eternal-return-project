import Item from '../../types/Item';

export const Scorchbow: Item = {
	"id": 114402,
	"name": "Scorchbow",
	"buildsInto": [
		114501
	],
	"requirements": {
		"Bow": 1,
		"Rubber": 1,
		"Lighter": 1
	},
	"stats": {
		"attackPower": 25,
		"increaseSkillDamageRatio": 18
	},
	"rarity": "Rare",
	"code": "화전",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A fiery arrow will burn your enemy.",
	"buildsFrom": [
		114202,
		401107
	],
	"displayName": "Scorchbow",
	"apiMetaData": {
		"code": 114402,
		"category": "Weapon",
		"type": "Bow"
	},
	"clientMetaData": {
		"type": "Bow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
