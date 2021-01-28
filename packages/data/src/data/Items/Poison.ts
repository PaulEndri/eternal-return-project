import Item from '../../types/Item';

export const Poison: Item = {
	"id": 401302,
	"name": "Poison",
	"buildsInto": [
		103502,
		113402,
		113409,
		205404
	],
	"requirements": {
		"Paper": 1,
		"Lighter": 1,
		"Water": 1
	},
	"stats": {},
	"rarity": "Rare",
	"code": "독약",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "DO NOT DRINK.",
	"buildsFrom": [
		401210,
		301102
	],
	"displayName": "Poison",
	"apiMetaData": {
		"code": 401302,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		5,
		6
	],
	"airSupply": true,
	"collectible": 0
}
