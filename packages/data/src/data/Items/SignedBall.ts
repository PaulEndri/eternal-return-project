import Item from '../../types/Item';

export const SignedBall: Item = {
	"id": 112205,
	"name": "SignedBall",
	"buildsInto": [
		{
			"name": "Sling",
			"id": 112204
		}
	],
	"requirements": {
		"Baseball": 1,
		"Fountain Pen": 1
	},
	"stats": {
		"attackPower": 30,
		"charges": 50
	},
	"rarity": "Uncommon",
	"code": "싸인볼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 112105
		},
		{
			"name": "Scissors",
			"id": 101102
		}
	],
	"displayName": "Signed Ball",
	"apiMetaData": {
		"code": 112205,
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
