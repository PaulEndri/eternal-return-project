import Item from '../../types/Item';

export const HalberdAxe: Item = {
	"id": 107303,
	"name": "HalberdAxe",
	"buildsInto": [
		{
			"name": "Fangtian Huaji",
			"id": 107407
		},
		{
			"name": "Dragon Guandao",
			"id": 107408
		}
	],
	"requirements": {
		"Hatchet": 1,
		"Short Spear": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": 90,
		"moveSpeed": -0.1
	},
	"rarity": "Rare",
	"code": "도끼창",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "On one end there's an ax blade and on the other end there's a stabbing blade.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 105103
		},
		{
			"name": "Scissors",
			"id": 107302
		}
	],
	"displayName": "Halberd Axe",
	"apiMetaData": {
		"code": 107303,
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
