import Item from '../../types/Item';

export const WhipofNineBloodyTails: Item = {
	"id": 109501,
	"name": "Whip of Nine Bloody Tails",
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
		"attackPower": 70,
		"lifeSteal": 0.2,
		"increaseSkillDamage": 40
	},
	"rarity": "Legend",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
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
