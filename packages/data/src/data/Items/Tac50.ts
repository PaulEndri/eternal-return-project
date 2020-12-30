import Item from '../../types/Item';

export const Tac50: Item = {
	"id": 118403,
	"name": "Tac-50",
	"buildsFrom": [
		{
			"name": "Harpoon Gun",
			"id": 118301
		},
		{
			"name": "Blueprint",
			"id": 401212
		}
	],
	"buildsInto": [],
	"requirements": {
		"Long Rifle": 1,
		"Laster Pointer": 1,
		"Short Spear": 1,
		"Fountain Pen": 1,
		"Paper": 1
	},
	"stats": {
		"attackPower": 140,
		"lifeSteal": 0.2,
		"moveSpeed": -0.07,
		"sightRange": 2.5
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 118403,
		"category": "Weapon",
		"type": "SniperRifle"
	},
	"clientMetaData": {
		"type": "SniperRifle",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
