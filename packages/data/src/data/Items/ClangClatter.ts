import Item from '../../types/Item';

export const ClangClatter: Item = {
	"id": 502206,
	"name": "ClangClatter",
	"buildsInto": [
		{
			"name": "Rocker's Jacket",
			"id": 202406
		}
	],
	"requirements": {
		"Can": 1,
		"Iron Ball": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Uncommon",
	"code": "소란발생기",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 5,
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 401120
		},
		{
			"name": "Scissors",
			"id": 112103
		}
	],
	"displayName": "Clang Clatter",
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
