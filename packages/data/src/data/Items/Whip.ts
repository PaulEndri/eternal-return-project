import Item from '../../types/Item';

export const Whip: Item = {
	"id": 109101,
	"name": "Whip",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Rope Cuffs",
			"id": "Rope Cuffs"
		},
		{
			"name": "Bullwhip",
			"id": "Bullwhip"
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 9
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"School": 4,
		"Chapel": 4
	},
	"foundQuantity": 1,
	"description": "",
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
