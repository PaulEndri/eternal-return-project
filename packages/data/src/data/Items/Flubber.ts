import Item from '../../types/Item';

export const Flubber: Item = {
	"id": 112304,
	"name": "Flubber",
	"buildsFrom": [
		{
			"name": "Rubber",
			"id": 401105
		},
		{
			"name": "Boiling Water",
			"id": 301201
		}
	],
	"buildsInto": [
		{
			"name": "Spiky Bouncy Ball",
			"id": 112403
		}
	],
	"requirements": {
		"Rubber": 1,
		"Water": 1,
		"Lighter": 1
	},
	"stats": {
		"attackPower": 42,
		"charges": 50
	},
	"rarity": "Rare",
	"code": "플러버",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It feels like the innocence of childhood. If you drop it, it'll lose its viscosity and become stiff, so take care of it.",
	"displayName": "Flubber",
	"apiMetaData": {
		"code": 112304,
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
