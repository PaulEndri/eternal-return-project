import Item from '../../types/Item';

export const MaiSok: Item = {
	"id": 111403,
	"name": "Mai Sok",
	"buildsFrom": [
		{
			"name": "Ryukyu Tonfa",
			"id": 111401
		},
		{
			"name": "Short Rod",
			"id": 108102
		}
	],
	"buildsInto": [],
	"requirements": {
		"Bamboo": 1,
		"Branch": 1,
		"Chalk": 1,
		"Stone": 1,
		"Short Rod": 1
	},
	"stats": {
		"attackPower": 45,
		"defense": 20,
		"hpRegenRatio": 1
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 111403,
		"category": "Weapon",
		"type": "Tonfa"
	},
	"clientMetaData": {
		"type": "Tonfa",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
