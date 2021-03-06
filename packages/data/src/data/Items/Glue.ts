import Item from '../../types/Item';

export const Glue: Item = {
	"id": 401116,
	"name": "Glue",
	"buildsInto": [
		401305,
		502205
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "접착제",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Alley": 7,
		"Hospital": 6,
		"Factory": 7
	},
	"foundQuantity": 1,
	"description": "Why doesn't it stick to itself in the bottle?",
	"buildsFrom": [],
	"displayName": "Glue",
	"apiMetaData": {
		"code": 401116,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		2
	],
	"airSupply": false,
	"collectible": 0
}
