import Item from '../../types/Item';

export const SmokeBomb: Item = {
	"id": 112402,
	"name": "Smoke Bomb",
	"buildsFrom": [
		{
			"name": "Flour Bomb",
			"id": 112301
		},
		{
			"name": "Cola",
			"id": 301209
		}
	],
	"buildsInto": [],
	"requirements": {
		"Chalk": 1,
		"Stone": 1,
		"Glass Bottle": 1,
		"Oil": 1,
		"Carbonated Water": 1,
		"Honey": 1
	},
	"stats": {
		"attackPower": 90,
		"attackSpeedRatio": 0.4,
		"charges": 20
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Inflicts immense damage by emitting a poisonous gas. It is made from gunpowder and a special barrel.",
	"apiMetaData": {
		"code": 112402,
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
