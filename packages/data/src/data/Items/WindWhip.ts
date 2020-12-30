import Item from '../../types/Item';

export const WindWhip: Item = {
	"id": "Wind Whip",
	"name": "Wind Whip",
	"href": "/Wind_Whip",
	"buildsFrom": [
		{
			"name": "Rope Cuffs",
			"id": "Rope Cuffs"
		},
		{
			"name": "Fan",
			"id": 205105
		}
	],
	"buildsInto": [
		{
			"name": "Gleipnir",
			"id": "Gleipnir"
		},
		{
			"name": "Whip of Nine Bloody Tails",
			"id": "Whip of Nine Bloody Tails"
		}
	],
	"requirements": {
		"Whip": 1,
		"Stallion Medal": 1,
		"Fan": 1
	},
	"stats": {
		"attackPower": 25,
		"increaseSkillDamage": 20
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"clientMetaData": {
		"type": "Whip",
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
