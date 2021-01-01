import Item from '../../types/Item';

export const ApricotSword: Item = {
	"id": 120301,
	"name": "ApricotSword",
	"buildsFrom": [
		{
			"name": "Rapier",
			"id": 120201
		},
		{
			"name": "Flower of Fate",
			"id": 205203
		}
	],
	"buildsInto": [
		{
			"name": "Durendal Mk2",
			"id": 120401
		},
		{
			"name": "Volticletto",
			"id": 120403
		},
		{
			"name": "Meteor Claymore",
			"id": 120404
		}
	],
	"requirements": {
		"Needle": 1,
		"Iron Ore": 1,
		"Flower": 1,
		"Playing Cards": 1
	},
	"stats": {
		"attackPower": 21,
		"cooldownReduction": 0.1,
		"criticalStrikeChance": 0.1,
		"criticalStrikeDamage": 0.25
	},
	"rarity": "Rare",
	"code": "매화검",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Apricot Sword",
	"apiMetaData": {
		"code": 120301,
		"category": "Weapon",
		"type": "Rapier"
	},
	"clientMetaData": {
		"type": "Rapier",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
