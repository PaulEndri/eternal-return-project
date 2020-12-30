import Item from '../../types/Item';

export const PlasmaWhip: Item = {
	"id": "Plasma Whip",
	"name": "Plasma Whip",
	"href": "/Plasma_Whip",
	"buildsFrom": [
		{
			"name": "Lightning Whip",
			"id": "Lightning Whip"
		},
		{
			"name": "Laster Pointer",
			"id": "Laster Pointer"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Whip": 1,
		"Razor": 1,
		"Battery": 1,
		"Water": 1,
		"Laster Pointer": 1
	},
	"stats": {
		"attackPower": 49,
		"attackSpeedRatio": 0.2,
		"sightRange": 2.3
	},
	"rarity": "Epic",
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
