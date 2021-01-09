import Item from '../../types/Item';

export const Oil: Item = {
	"id": 401112,
	"name": "Oil",
	"buildsInto": [
		{
			"name": "Masamune",
			"id": 102401
		},
		{
			"name": "Molotov Cocktail",
			"id": 112203
		},
		{
			"name": "Strong Bow",
			"id": 114301
		},
		{
			"name": "Magnum-Python",
			"id": 116201
		},
		{
			"name": "Gatling Gun",
			"id": 117403
		},
		{
			"name": "Wild Horse",
			"id": 121306
		},
		{
			"name": "Oilcloth",
			"id": 401202
		},
		{
			"name": "Heated Oil",
			"id": 401203
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "오일",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Avenue": 7,
		"Archery Range": 5,
		"Factory": 7,
		"Uptown": 7
	},
	"foundQuantity": 1,
	"description": "At room temperature, this fatty component exists in liquid form.",
	"buildsFrom": [],
	"displayName": "Oil",
	"apiMetaData": {
		"code": 401112,
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
