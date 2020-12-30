import Item from '../../types/Item';

export const Autoarms: Item = {
	"id": "Auto-arms",
	"name": "Auto-arms",
	"href": "/Auto-arms",
	"buildsFrom": [
		{
			"name": "Bracer",
			"id": 203203
		},
		{
			"name": "Force Core",
			"id": 401403
		}
	],
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
		"hpRegen": 1.5
	},
	"rarity": "Legend",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
