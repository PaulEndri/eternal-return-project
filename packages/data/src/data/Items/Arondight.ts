import Item from '../../types/Item';

export const Arondight: Item = {
	"id": 102406,
	"name": "Arondight",
	"buildsFrom": [
		{
			"name": "Masamune",
			"id": 102401
		},
		{
			"name": "Cross",
			"id": 205109
		}
	],
	"buildsInto": [],
	"requirements": {
		"Rusty Sword": 1,
		"Scrap Metal": 1,
		"Hammer": 1,
		"Oil": 1,
		"Cross": 1
	},
	"stats": {
		"attackPower": 50,
		"attackSpeedRatio": 0.25,
		"increaseBasicAttackDamage": 23
	},
	"rarity": "Epic",
	"code": "아론다이트",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The sword of Sir Lancelot, who was a dragon slayer that cut down the fire drake during the rescue of princess Elaine of Corbenic.",
	"displayName": "Arondight",
	"apiMetaData": {
		"code": 102406,
		"category": "Weapon",
		"type": "TwoHandSword"
	},
	"clientMetaData": {
		"type": "Two-Handed Sword",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
