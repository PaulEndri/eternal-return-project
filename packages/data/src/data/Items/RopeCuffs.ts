import Item from '../../types/Item';

export const RopeCuffs: Item = {
	"id": "Rope Cuffs",
	"name": "Rope Cuffs",
	"href": "/Rope_Cuffs",
	"buildsFrom": [
		{
			"name": "Whip",
			"id": 109101
		},
		{
			"name": "Stallion Medal",
			"id": 401109
		}
	],
	"buildsInto": [
		{
			"name": "Wind Whip",
			"id": "Wind Whip"
		}
	],
	"requirements": {
		"Whip": 1,
		"Stallion Medal": 1
	},
	"stats": {
		"attackPower": 19
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"clientMetaData": {
		"type": "Whip",
		"category": "Weapon"
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
