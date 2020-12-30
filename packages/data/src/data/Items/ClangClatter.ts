import Item from '../../types/Item';

export const ClangClatter: Item = {
	"id": 502206,
	"name": "Clang Clatter",
	"buildsFrom": [
		{
			"name": "Can",
			"id": 401120
		},
		{
			"name": "Iron Ball",
			"id": 112103
		}
	],
	"buildsInto": [
		{
			"name": "Rocker's Jacket",
			"id": "Rocker's Jacket"
		}
	],
	"requirements": {
		"Can": 1,
		"Iron Ball": 1
	},
	"stats": {
		"attackPower": 6
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 5,
	"apiMetaData": {
		"code": 502206,
		"category": "Special",
		"type": "Summon"
	},
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
