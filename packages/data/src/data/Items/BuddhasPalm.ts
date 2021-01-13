import Item from '../../types/Item';

export const BuddhasPalm: Item = {
	"id": 110409,
	"name": "BuddhasPalm",
	"buildsInto": [],
	"requirements": {
		"Cotton Gloves": 1,
		"Leather": 1,
		"Paper": 1,
		"Lighter": 1,
		"Buddhist Scripture": 1,
		"Monk's Robe": 1
	},
	"stats": {
		"attackPower": 33,
		"cooldownReduction": 0.1,
		"increaseSkillDamageRatio": 0.18
	},
	"rarity": "Epic",
	"code": "여래수투",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 110404
		},
		{
			"name": "Scissors",
			"id": 205207
		}
	],
	"displayName": "Buddha's Palm",
	"apiMetaData": {
		"code": 110409,
		"category": "Weapon",
		"type": "Glove"
	},
	"clientMetaData": {
		"type": "Glove",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
