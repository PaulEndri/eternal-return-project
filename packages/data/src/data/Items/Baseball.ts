import Item from '../../types/Item';

export const Baseball: Item = {
	"id": 112105,
	"name": "Baseball",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Signed Ball",
			"id": 112205
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 12,
		"charges": 50
	},
	"rarity": "Common",
	"code": "야구공",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Baseball",
	"apiMetaData": {
		"code": 112105,
		"category": "Weapon",
		"type": "HighAngleFire"
	},
	"clientMetaData": {
		"type": "Throw",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
