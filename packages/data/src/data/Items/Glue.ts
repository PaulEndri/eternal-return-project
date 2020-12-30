import Item from '../../types/Item';

export const Glue: Item = {
	"id": 401116,
	"name": "Glue",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Glass Panel",
			"id": 401305
		},
		{
			"name": "Booby Trap",
			"id": "Booby Trap"
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Alley": 7,
		"Hospital": 6,
		"Factory": 7
	},
	"foundQuantity": 1,
	"description": "Why doesn't it stick to itself in the bottle?",
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
		{
			"name": "Bat",
			"id": 2
		}
	],
	"airSupply": false,
	"collectible": 0
}
