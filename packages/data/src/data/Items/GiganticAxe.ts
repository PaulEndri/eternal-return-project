import Item from '../../types/Item';

export const GiganticAxe: Item = {
	"id": 105401,
	"name": "GiganticAxe",
	"buildsInto": [
		{
			"name": "Beam Axe",
			"id": 105402
		}
	],
	"requirements": {
		"Hatchet": 1,
		"Bamboo": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": 110,
		"moveSpeed": -0.1
	},
	"rarity": "Rare",
	"code": "대부",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 105202
		},
		{
			"name": "Scissors",
			"id": 401201
		}
	],
	"displayName": "Gigantic Axe",
	"apiMetaData": {
		"code": 105401,
		"category": "Weapon",
		"type": "Axe"
	},
	"clientMetaData": {
		"type": "Axe",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
