import Item from '../../types/Item';

export const Ash: Item = {
	"id": 401210,
	"name": "Ash",
	"buildsFrom": [
		{
			"name": "Paper",
			"id": 401117
		},
		{
			"name": "Lighter",
			"id": 401107
		}
	],
	"buildsInto": [
		{
			"name": "Mount Slicer",
			"id": 101402
		},
		{
			"name": "Phoenix Gloves",
			"id": 110404
		},
		{
			"name": "Mystic Jade Charm",
			"id": 113405
		},
		{
			"name": "Devil's Marksman",
			"id": 116403
		},
		{
			"name": "The Smiting Dragon",
			"id": 119401
		},
		{
			"name": "Purple Haze",
			"id": 121403
		},
		{
			"name": "Straitjacket Sneakers",
			"id": 204406
		},
		{
			"name": "Poison",
			"id": 401302
		}
	],
	"requirements": {
		"Paper": 1,
		"Lighter": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "재",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "The remains of something burning.",
	"displayName": "Ash",
	"apiMetaData": {
		"code": 401210,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		{
			"name": "Wolf",
			"id": 5
		},
		{
			"name": "Bear",
			"id": 6
		}
	],
	"airSupply": true,
	"collectible": 0
}
