import Item from '../../types/Item';

export const Sling: Item = {
	"id": 112204,
	"name": "Sling",
	"buildsFrom": [
		{
			"name": "Signed Ball",
			"id": 112205
		},
		{
			"name": "Rubber",
			"id": 401105
		}
	],
	"buildsInto": [
		{
			"name": "David's Sling",
			"id": 112401
		}
	],
	"requirements": {
		"Baseball": 1,
		"Fountain Pen": 1,
		"Rubber": 1
	},
	"stats": {
		"attackPower": 42,
		"charges": 50
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 112204,
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
