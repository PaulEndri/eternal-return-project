import Item from '../../types/Item';

export const PlasmaWhip: Item = {
	"id": 109404,
	"name": "PlasmaWhip",
	"buildsFrom": [
		{
			"name": "Lightning Whip",
			"id": 109402
		},
		{
			"name": "Laster Pointer",
			"id": 401108
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
		"attackPower": 54,
		"attackSpeedRatio": 0.3,
		"sightRange": 2.3
	},
	"rarity": "Epic",
	"code": "플라즈마윕",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Plasma Whip",
	"apiMetaData": {
		"code": 109404,
		"category": "Weapon",
		"type": "Whip"
	},
	"clientMetaData": {
		"type": "Whip",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
