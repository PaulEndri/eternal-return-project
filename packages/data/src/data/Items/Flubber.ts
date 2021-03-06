import Item from '../../types/Item';

export const Flubber: Item = {
	"id": 112304,
	"name": "Flubber",
	"buildsInto": [
		112403
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
	"buildsFrom": [
		401105,
		301201
	],
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
