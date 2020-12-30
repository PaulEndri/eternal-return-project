import Item from '../../types/Item';

export const Oilcloth: Item = {
	"id": 401202,
	"name": "Oilcloth",
	"buildsFrom": [
		{
			"name": "Oil",
			"id": 401112
		},
		{
			"name": "Bandage",
			"id": 203102
		}
	],
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
			"id": "The Legend of The General"
		},
		{
			"name": "Boots",
			"id": 204302
		},
		{
			"name": "Fire Trap",
			"id": "Fire Trap"
		}
	],
	"requirements": {
		"Oil": 1,
		"Bandage": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 2,
	"description": "Oiled cloth. May be needed for something involving fire.",
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
