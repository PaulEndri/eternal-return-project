import Item from '../../types/Item';

export const Parashu: Item = {
	"id": 105405,
	"name": "Parashu",
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
		"moveSpeed": 0.15
	},
	"rarity": "Epic",
	"code": "파라슈",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 105301
		},
		{
			"name": "Scissors",
			"id": 205207
		}
	],
	"displayName": "Parashu",
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
