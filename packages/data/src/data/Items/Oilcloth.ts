import Item from '../../types/Item';

export const Oilcloth: Item = {
	"id": 401202,
	"name": "Oilcloth",
	"buildsInto": [
		{
			"name": "Torch",
			"id": 108402
		},
		{
			"name": "Brasil Gauntlet",
			"id": 110410
		},
		{
			"name": "The Legend of The General",
			"id": 115402
		},
		{
			"name": "Boots",
			"id": 204302
		},
		{
			"name": "Fire Trap",
			"id": 502403
		}
	],
	"requirements": {
		"Oil": 1,
		"Bandage": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "기름먹인천",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 2,
	"description": "Oiled cloth. May be needed for something involving fire.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 401112
		},
		{
			"name": "Scissors",
			"id": 203102
		}
	],
	"displayName": "Oilcloth",
	"apiMetaData": {
		"code": 401202,
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
