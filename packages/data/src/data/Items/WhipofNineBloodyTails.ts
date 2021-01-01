import Item from '../../types/Item';

export const WhipOfNineBloodyTails: Item = {
	"id": 109501,
	"name": "WhipOfNineBloodyTails",
	"buildsFrom": [
		{
			"name": "VF Blood Sample",
			"id": 401401
		},
		{
			"name": "Wind Whip",
			"id": 109301
		}
	],
	"buildsInto": [],
	"requirements": {
		"VF Blood Sample": 1,
		"Whip": 1,
		"Stallion Medal": 1,
		"Fan": 1
	},
	"stats": {
		"attackPower": 65,
		"lifeSteal": 0.2,
		"increaseSkillDamage": 40
	},
	"rarity": "Legend",
	"code": "혈화구절편",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Whip of Nine Bloody Tails",
	"apiMetaData": {
		"code": 109501,
		"category": "Weapon",
		"type": "Whip"
	},
	"clientMetaData": {
		"type": "Whip",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
