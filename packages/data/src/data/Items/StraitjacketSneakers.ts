import Item from '../../types/Item';

export const StraitjacketSneakers: Item = {
	"id": 204406,
	"name": "StraitjacketSneakers",
	"buildsInto": [],
	"requirements": {
		"Slippers": 1,
		"Cloth": 1,
		"Paper": 1,
		"Lighter": 1
	},
	"stats": {
		"moveSpeed": 0.35,
		"spRegen": 0.7,
		"spRegenRatio": 0.5,
		"increaseSkillDamage": 10
	},
	"rarity": "Rare",
	"code": "풍화륜",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Repaired Slippers",
			"id": 204301
		},
		{
			"name": "Ash",
			"id": 401210
		}
	],
	"displayName": "Straitjacket Sneakers",
	"apiMetaData": {
		"code": 204406,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
