import Item from '../../types/Item';

export const BerettaM92F: Item = {
	"id": 116202,
	"name": "Beretta M92F",
	"buildsFrom": [
		{
			"name": "Walther PPK",
			"id": 116101
		},
		{
			"name": "Leather",
			"id": 401103
		}
	],
	"buildsInto": [
		{
			"name": "FN57",
			"id": 116301
		},
		{
			"name": "Double Revolver SP",
			"id": 116401
		},
		{
			"name": "Electron Blaster",
			"id": 116405
		},
		{
			"name": "Kelte",
			"id": 116501
		}
	],
	"requirements": {
		"Walther PPK": 1,
		"Leather": 1
	},
	"stats": {
		"attackPower": 23,
		"charges": 30,
		"moveSpeed": 0.1
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 116202,
		"category": "Weapon",
		"type": "Pistol"
	},
	"clientMetaData": {
		"type": "Pistol",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
