import Item from '../../types/Item';

export const EighteenFootSpear: Item = {
	"id": 107403,
	"name": "Eighteen Foot Spear",
	"buildsFrom": [
		{
			"name": "Sharpened Spear",
			"id": 107401
		},
		{
			"name": "Ion Battery",
			"id": 401306
		}
	],
	"buildsInto": [],
	"requirements": {
		"Short Spear": 1,
		"Bamboo": 1,
		"Feather": 1,
		"Battery": 1,
		"Water": 1,
		"Carbonated Water": 1
	},
	"stats": {
		"attackPower": 100,
		"attackSpeedRatio": 0.4
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 107403,
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
