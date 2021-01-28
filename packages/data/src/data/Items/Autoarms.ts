import Item from '../../types/Item';

export const Autoarms: Item = {
	"id": 203503,
	"name": "Autoarms",
	"buildsInto": [],
	"requirements": {
		"Bandage": 1,
		"Leather": 1,
		"Tree of Life": 1,
		"Stone": 1,
		"Meteorite": 1
	},
	"stats": {
		"attackPower": 40,
		"defense": 35,
		"hpRegen": 1
	},
	"rarity": "Legend",
	"code": "오토암즈",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		203203,
		401403
	],
	"displayName": "Auto-arms",
	"apiMetaData": {
		"code": 203503,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
