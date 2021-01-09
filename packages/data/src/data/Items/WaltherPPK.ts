import Item from '../../types/Item';

export const WaltherPPK: Item = {
	"id": 116101,
	"name": "WaltherPPK",
	"buildsInto": [
		{
			"name": "Magnum-Python",
			"id": 116201
		},
		{
			"name": "Beretta M92F",
			"id": 116202
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 8,
		"charges": 6,
		"moveSpeed": 0.1
	},
	"rarity": "Common",
	"code": "발터PPK",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Factory": 4,
		"Hotel": 5,
		"Beach": 4
	},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [],
	"displayName": "Walther PPK",
	"apiMetaData": {
		"code": 116101,
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
