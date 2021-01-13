import Item from '../../types/Item';

export const DragonGuandao: Item = {
	"id": 107408,
	"name": "DragonGuandao",
	"buildsInto": [],
	"requirements": {
		"Hatchet": 1,
		"Short Spear": 1,
		"Scrap Metal": 2,
		"Iron Ore": 1,
		"Hammer": 1
	},
	"stats": {
		"attackPower": 130,
		"moveSpeed": -0.1
	},
	"rarity": "Epic",
	"code": "청룡언월도",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Made of 49 kg of iron during the Three Kingdoms period. It was thought to be used by Guan Yu.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 107303
		},
		{
			"name": "Scissors",
			"id": 401213
		}
	],
	"displayName": "Dragon Guandao",
	"apiMetaData": {
		"code": 107408,
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
