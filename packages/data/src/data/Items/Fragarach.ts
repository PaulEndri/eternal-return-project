import Item from '../../types/Item';

export const Fragarach: Item = {
	"id": 101405,
	"name": "Fragarach",
	"buildsFrom": [
		{
			"name": "Army Knife",
			"id": 101201
		},
		{
			"name": "Force Core",
			"id": 401403
		}
	],
	"buildsInto": [],
	"requirements": {
		"Kitchen Knife": 1,
		"Branch": 1,
		"Tree of Life": 1,
		"Stone": 1,
		"Meteorite": 1
	},
	"stats": {
		"attackPower": 75,
		"moveSpeed": 0.2,
		"moveSpeedOutOfCombat": 0.1
	},
	"rarity": "Legend",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 101405,
		"category": "Weapon",
		"type": "OneHandSword"
	},
	"clientMetaData": {
		"type": "Dagger",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
