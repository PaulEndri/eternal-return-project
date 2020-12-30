import Item from '../../types/Item';

export const Razor: Item = {
	"id": 113101,
	"name": "Razor",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Bullwhip",
			"id": 109202
		},
		{
			"name": "Throwing Stars",
			"id": 113205
		},
		{
			"name": "Onyx Dagger",
			"id": 113206
		},
		{
			"name": "Bleeder",
			"id": 119302
		},
		{
			"name": "Qipao",
			"id": 202304
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 11,
		"charges": 50
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Hospital": 6,
		"School": 6,
		"Chapel": 6
	},
	"foundQuantity": 1,
	"description": "Check for these in your Halloween candy before you eat it!",
	"apiMetaData": {
		"code": 113101,
		"category": "Weapon",
		"type": "DirectFire"
	},
	"clientMetaData": {
		"type": "Shuriken",
		"category": "Weapon"
	},
	"droppedFrom": [
		{
			"name": "Bat",
			"id": 2
		}
	],
	"airSupply": false,
	"collectible": 0
}
