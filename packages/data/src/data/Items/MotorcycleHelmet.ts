import Item from '../../types/Item';

export const MotorcycleHelmet: Item = {
	"id": 201405,
	"name": "MotorcycleHelmet",
	"buildsInto": [],
	"requirements": {
		"Bike Helmet": 1,
		"Stone": 1,
		"Water": 1,
		"Binoculars": 1
	},
	"stats": {
		"attackPower": 10,
		"maxHp": 300,
		"sightRange": 1.5
	},
	"rarity": "Rare",
	"code": "오토바이헬멧",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Fire Helmet",
			"id": 201302
		},
		{
			"name": "Binoculars",
			"id": 205110
		}
	],
	"displayName": "Motorcycle Helmet",
	"apiMetaData": {
		"code": 201405,
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
