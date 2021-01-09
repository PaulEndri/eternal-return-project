import Item from '../../types/Item';

export const MagnumAnaconda: Item = {
	"id": 116402,
	"name": "MagnumAnaconda",
	"buildsInto": [
		{
			"name": "Magnum-Boa",
			"id": 116406
		}
	],
	"requirements": {
		"Walther PPK": 1,
		"Oil": 1,
		"Fountain Pen": 1,
		"Paper": 1
	},
	"stats": {
		"attackPower": 43,
		"attackSpeedRatio": 0.1,
		"charges": 30,
		"lifeSteal": 0.1,
		"moveSpeed": 0.1
	},
	"rarity": "Rare",
	"code": "매그넘-아나콘다",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Named after the Anaconda, which is larger than a Python, it uses a larger caliber Magnum cartridge.",
	"buildsFrom": [
		{
			"name": "Magnum-Python",
			"id": 116201
		},
		{
			"name": "Blueprint",
			"id": 401212
		}
	],
	"displayName": "Magnum-Anaconda",
	"apiMetaData": {
		"code": 116402,
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
