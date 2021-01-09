import Item from '../../types/Item';

export const Lighter: Item = {
	"id": 401107,
	"name": "Lighter",
	"buildsInto": [
		{
			"name": "Shamshir",
			"id": 102201
		},
		{
			"name": "Scorchbow",
			"id": 114402
		},
		{
			"name": "True Samadhi Fire",
			"id": 205403
		},
		{
			"name": "Boiling Water",
			"id": 301201
		},
		{
			"name": "Baijiu",
			"id": 301204
		},
		{
			"name": "Kaoliang Liquor",
			"id": 301301
		},
		{
			"name": "Heated Oil",
			"id": 401203
		},
		{
			"name": "Ash",
			"id": 401210
		},
		{
			"name": "Heated Stone",
			"id": 401215
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "라이터",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Alley": 8,
		"School": 7,
		"Factory": 8,
		"Dock": 8
	},
	"foundQuantity": 1,
	"description": "The ability to make fire is key.",
	"buildsFrom": [],
	"displayName": "Lighter",
	"apiMetaData": {
		"code": 401107,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		{
			"name": "WildDog",
			"id": 4
		}
	],
	"airSupply": false,
	"collectible": 0
}
