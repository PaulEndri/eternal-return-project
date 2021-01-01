import Item from '../../types/Item';

export const Can: Item = {
	"id": 401120,
	"name": "Can",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Can of Cola",
			"id": 301309
		},
		{
			"name": "Canned Cod Liver",
			"id": 302204
		},
		{
			"name": "Clang Clatter",
			"id": 502206
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "캔",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Avenue": 6,
		"School": 5,
		"Beach": 4
	},
	"foundQuantity": 1,
	"description": "You can throw the can.",
	"displayName": "Can",
	"apiMetaData": {
		"code": 401120,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		{
			"name": "Boar",
			"id": 3
		}
	],
	"airSupply": false,
	"collectible": 0
}
