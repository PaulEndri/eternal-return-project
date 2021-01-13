import Item from '../../types/Item';

export const FireHelmet: Item = {
	"id": 201302,
	"name": "FireHelmet",
	"buildsInto": [
		{
			"name": "Motorcycle Helmet",
			"id": 201405
		}
	],
	"requirements": {
		"Bike Helmet": 1,
		"Stone": 1,
		"Water": 1
	},
	"stats": {
		"maxHp": 280
	},
	"rarity": "Rare",
	"code": "소방헬멧",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Head protection for firefighters. Strong resistance to flames and heat. Also equipped with a flashlight!",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 201205
		},
		{
			"name": "Scissors",
			"id": 301102
		}
	],
	"displayName": "Fire Helmet",
	"apiMetaData": {
		"code": 201302,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
