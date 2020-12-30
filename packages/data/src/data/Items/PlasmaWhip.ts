import Item from '../../types/Item';

export const PlasmaWhip: Item = {
	"id": 109404,
	"name": "Plasma Whip",
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
