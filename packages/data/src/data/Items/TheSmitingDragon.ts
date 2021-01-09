import Item from '../../types/Item';

export const TheSmitingDragon: Item = {
	"id": 119401,
	"name": "TheSmitingDragon",
	"buildsInto": [],
	"requirements": {
		"Steel Chain": 1,
		"Scrap Metal": 1,
		"Nail": 1,
		"Paper": 1,
		"Lighter": 1
	},
	"stats": {
		"attackPower": 50,
		"decreaseRecoveryToSkill": 1,
		"increaseSkillDamage": 14
	},
	"rarity": "Epic",
	"code": "대소반룡곤",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Sharper",
			"id": 119301
		},
		{
			"name": "Ash",
			"id": 401210
		}
	],
	"displayName": "The Smiting Dragon",
	"apiMetaData": {
		"code": 119401,
		"category": "Weapon",
		"type": "Nunchaku"
	},
	"clientMetaData": {
		"type": "Nunchaku",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
