import Item from '../../types/Item';

export const SharpenedSpear: Item = {
	"id": 107401,
	"name": "SharpenedSpear",
	"buildsInto": [
		{
			"name": "Gentian Silver Gun",
			"id": 107402
		},
		{
			"name": "Eighteen Foot Spear",
			"id": 107403
		}
	],
	"requirements": {
		"Short Spear": 1,
		"Bamboo": 1,
		"Feather": 1
	},
	"stats": {
		"attackPower": 40,
		"moveSpeed": 0.1
	},
	"rarity": "Rare",
	"code": "강창",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 107201
		},
		{
			"name": "Scissors",
			"id": 205101
		}
	],
	"displayName": "Sharpened Spear",
	"apiMetaData": {
		"code": 107401,
		"category": "Weapon",
		"type": "Spear"
	},
	"clientMetaData": {
		"type": "Spear",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
