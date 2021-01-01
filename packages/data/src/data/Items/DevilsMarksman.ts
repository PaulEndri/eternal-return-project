import Item from '../../types/Item';

export const DevilsMarksman: Item = {
	"id": 116403,
	"name": "DevilsMarksman",
	"buildsFrom": [
		{
			"name": "Double Revolver SP",
			"id": 116401
		},
		{
			"name": "Ash",
			"id": 401210
		}
	],
	"buildsInto": [],
	"requirements": {
		"Walther PPK": 2,
		"Oil": 1,
		"Leather": 1,
		"Paper": 1,
		"Lighter": 1
	},
	"stats": {
		"attackPower": 30,
		"attackSpeedRatio": 0.1,
		"charges": 30,
		"moveSpeed": 0.1,
		"increaseSkillDamage": 40
	},
	"rarity": "Epic",
	"code": "마탄의사수",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "You can perfect your marksmanship by selling your soul to the devil. What could possibly go wrong?",
	"displayName": "Devil's Marksman",
	"apiMetaData": {
		"code": 116403,
		"category": "Weapon",
		"type": "Pistol"
	},
	"clientMetaData": {
		"type": "Pistol",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}