import Item from '../../types/Item';

export const Fragarach: Item = {
	"id": 101405,
	"name": "Fragarach",
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
	"code": "프라가라흐",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
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
	"displayName": "Fragarach",
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
