import Item from '../../types/Item';

export const Bow: Item = {
	"id": 114101,
	"name": "Bow",
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
	"code": "양궁",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Archery Range": 4,
		"Chapel": 4
	},
	"foundQuantity": 1,
	"description": "Try not to cry if the bowstring hits your face.",
	"displayName": "Bow",
	"apiMetaData": {
		"code": 114101,
		"category": "Weapon",
		"type": "Bow"
	},
	"clientMetaData": {
		"type": "Bow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
