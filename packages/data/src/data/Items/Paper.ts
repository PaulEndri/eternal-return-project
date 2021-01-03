import Item from '../../types/Item';

export const Paper: Item = {
	"id": 401117,
	"name": "Paper",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Ash",
			"id": 401210
		},
		{
			"name": "Blueprint",
			"id": 401212
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "종이",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Temple": 7,
		"Archery Range": 5,
		"Chapel": 6
	},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Paper",
	"apiMetaData": {
		"code": 401117,
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
