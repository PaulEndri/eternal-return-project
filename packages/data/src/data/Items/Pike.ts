import Item from '../../types/Item';

export const Pike: Item = {
	"id": 107302,
	"name": "Pike",
	"buildsFrom": [
		{
			"name": "Short Spear",
			"id": 107101
		},
		{
			"name": "Steel",
			"id": 401201
		}
	],
	"buildsInto": [
		{
			"name": "Halberd Axe",
			"id": 107303
		},
		{
			"name": "Lance of Poseidon",
			"id": 107405
		},
		{
			"name": "Spear of Longinus",
			"id": 107501
		}
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
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
