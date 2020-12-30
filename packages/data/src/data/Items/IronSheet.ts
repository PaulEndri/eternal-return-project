import Item from '../../types/Item';

export const IronSheet: Item = {
	"id": 401213,
	"name": "Iron Sheet",
	"buildsFrom": [
		{
			"name": "Scrap Metal",
			"id": 401106
		},
		{
			"name": "Hammer",
			"id": 104101
		}
	],
	"buildsInto": [
		{
			"name": "Katana",
			"id": 102301
		},
		{
			"name": "Dragon Guandao",
			"id": 107408
		},
		{
			"name": "Steel Bow",
			"id": 115401
		},
		{
			"name": "NTW-20",
			"id": 118405
		},
		{
			"name": "Bulletproof Vest",
			"id": 202401
		},
		{
			"name": "Sheath",
			"id": 203301
		},
		{
			"name": "Bazuband",
			"id": 203303
		},
		{
			"name": "Magazine",
			"id": 205303
		}
	],
	"requirements": {
		"Scrap Metal": 1,
		"Hammer": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 2,
	"description": "This will give you goosebumps if you scrape your fingernails across it.",
	"apiMetaData": {
		"code": 401213,
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
