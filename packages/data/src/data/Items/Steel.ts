import Item from '../../types/Item';

export const Steel: Item = {
	"id": 401201,
	"name": "Steel",
	"buildsFrom": [
		{
			"name": "Scrap Metal",
			"id": 401106
		},
		{
			"name": "Iron Ore",
			"id": 401118
		}
	],
	"buildsInto": [
		{
			"name": "Bastard Sword",
			"id": 102403
		},
		{
			"name": "Gigantic Axe",
			"id": 105401
		},
		{
			"name": "Pike",
			"id": 107302
		},
		{
			"name": "Gauntlet",
			"id": 110301
		},
		{
			"name": "Plumbata",
			"id": 113404
		},
		{
			"name": "Heavy Crossbow",
			"id": 115303
		},
		{
			"name": "Magnum-Boa",
			"id": 116406
		},
		{
			"name": "Sheet Metal Armor",
			"id": 202305
		},
		{
			"name": "Steel Shield",
			"id": 203401
		},
		{
			"name": "Steel Knee Pads",
			"id": 204401
		}
	],
	"requirements": {
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "강철",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 2,
	"description": "Just some strong steel. They could name a football team after this.",
	"displayName": "Steel",
	"apiMetaData": {
		"code": 401201,
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
