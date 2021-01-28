import Item from '../../types/Item';

export const Pike: Item = {
	"id": 107302,
	"name": "Pike",
	"buildsInto": [
		107303,
		107405,
		107501
	],
	"requirements": {
		"Short Spear": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": 67,
		"moveSpeed": -0.1
	},
	"rarity": "Rare",
	"code": "파이크",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		107101,
		401201
	],
	"displayName": "Pike",
	"apiMetaData": {
		"code": 107302,
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
