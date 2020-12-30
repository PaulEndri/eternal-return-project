import Item from '../../types/Item';

export const RyukyuTonfa: Item = {
	"id": 111401,
	"name": "Ryukyu Tonfa",
	"buildsFrom": [
		{
			"name": "Tonfa",
			"id": 111201
		},
		{
			"name": "White Powder",
			"id": 401206
		}
	],
	"buildsInto": [
		{
			"name": "Mai Sok",
			"id": 111403
		},
		{
			"name": "Plasma Tonfa",
			"id": 111404
		}
	],
	"requirements": {
		"Bamboo": 1,
		"Branch": 1,
		"Chalk": 1,
		"Stone": 1
	},
	"stats": {
		"attackPower": 38,
		"defense": 18
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 111401,
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
