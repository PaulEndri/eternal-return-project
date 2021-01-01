import Item from '../../types/Item';

export const Whip: Item = {
	"id": 109101,
	"name": "Whip",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Rope Cuffs",
			"id": 109201
		},
		{
			"name": "Bullwhip",
			"id": 109202
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 12
	},
	"rarity": "Common",
	"code": "채찍",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"School": 4,
		"Chapel": 4
	},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Whip",
	"apiMetaData": {
		"code": 109101,
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
