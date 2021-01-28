import Item from '../../types/Item';

export const DevilsMarksman: Item = {
	"id": 116403,
	"name": "DevilsMarksman",
	"buildsInto": [],
	"requirements": {
		"Walther PPK": 2,
		"Oil": 1,
		"Leather": 1,
		"Paper": 1,
		"Lighter": 1
	},
	"stats": {
		"attackPower": 35,
		"attackSpeedRatio": 0.1,
		"charges": 30,
		"moveSpeed": 0.1,
		"increaseSkillDamageRatio": 42
	},
	"rarity": "Epic",
	"code": "마탄의사수",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "You can perfect your marksmanship by selling your soul to the devil. What could possibly go wrong?",
	"buildsFrom": [
		116401,
		401210
	],
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
