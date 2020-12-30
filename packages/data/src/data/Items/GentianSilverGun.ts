import Item from '../../types/Item';

export const GentianSilverGun: Item = {
	"id": 107402,
	"name": "Gentian Silver Gun",
	"buildsFrom": [
		{
			"name": "Sharpened Spear",
			"id": 107401
		},
		{
			"name": "White Powder",
			"id": 401206
		}
	],
	"buildsInto": [],
	"requirements": {
		"Short Spear": 1,
		"Bamboo": 1,
		"Feather": 1,
		"Chalk": 1,
		"Stone": 1
	},
	"stats": {
		"attackPower": 105,
		"moveSpeed": 0.2
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 107402,
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
