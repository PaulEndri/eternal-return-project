import Item from '../../types/Item';

export const DevilsMarksman: Item = {
	"id": "Devil's Marksman",
	"name": "Devil's Marksman",
	"href": "/Devil's_Marksman",
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "You can perfect your marksmanship by selling your soul to the devil. What could possibly go wrong?",
	"clientMetaData": {
		"type": "Pistol",
		"category": "Weapon"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
