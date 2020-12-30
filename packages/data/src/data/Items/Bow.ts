import Item from '../../types/Item';

export const Bow: Item = {
	"id": "Bow",
	"name": "Bow",
	"href": "/Bow",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Longbow",
			"id": 114202
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 11
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Archery Range": 4,
		"Chapel": 4
	},
	"foundQuantity": 1,
	"description": "Try not to cry if the bowstring hits your face.",
	"clientMetaData": {
		"type": "Bow",
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
