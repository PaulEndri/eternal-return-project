import Item from '../../types/Item';

export const FlourBomb: Item = {
	"id": 112301,
	"name": "Flour Bomb",
	"buildsFrom": [
		{
			"name": "White Powder",
			"id": 401206
		},
		{
			"name": "Molotov Cocktail",
			"id": 112203
		}
	],
	"buildsInto": [
		{
			"name": "Smoke Bomb",
			"id": 112402
		}
	],
	"requirements": {
		"Chalk": 1,
		"Stone": 1,
		"Glass Bottle": 1,
		"Oil": 1
	},
	"stats": {
		"attackPower": 58,
		"attackSpeedRatio": 0.15,
		"charges": 20
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "By combining a flour bomb and some gunpowder, you can make a smoke bomb. Let's see if there's any gunpowder around here...",
	"apiMetaData": {
		"code": 112301,
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
