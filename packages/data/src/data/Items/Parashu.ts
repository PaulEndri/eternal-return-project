import Item from '../../types/Item';

export const Parashu: Item = {
	"id": 105405,
	"name": "Parashu",
	"buildsFrom": [
		{
			"name": "Light Hatchet",
			"id": 105301
		},
		{
			"name": "Buddha Sarira",
			"id": 205207
		}
	],
	"buildsInto": [],
	"requirements": {
		"Hatchet": 1,
		"Bamboo": 1,
		"Feather": 1,
		"Buddhist Scripture": 1,
		"Monk's Robe": 1
	},
	"stats": {
		"attackPower": 115,
		"cooldownReduction": 0.1,
		"moveSpeed": 0.2
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 105405,
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
