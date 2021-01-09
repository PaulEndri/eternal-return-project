import Item from '../../types/Item';

export const Gold: Item = {
	"id": 401214,
	"name": "Gold",
	"buildsInto": [
		{
			"name": "Scythe",
			"id": 105404
		},
		{
			"name": "Thunder Whip",
			"id": 109401
		},
		{
			"name": "Ruthenium Marble",
			"id": 112501
		},
		{
			"name": "Golden-Ratio Bow",
			"id": 114403
		},
		{
			"name": "Golden Rifle",
			"id": 118401
		},
		{
			"name": "Golden Bridge",
			"id": 121201
		},
		{
			"name": "Crown",
			"id": 201401
		},
		{
			"name": "Imperial Burgonet",
			"id": 201410
		},
		{
			"name": "Commander's Armor",
			"id": 202412
		},
		{
			"name": "Golden Bracelet",
			"id": 203302
		}
	],
	"requirements": {
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "황금",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "Soft, valuable, and gorgeous. A must have for any piece of jewelery.",
	"buildsFrom": [
		{
			"name": "Pickaxe",
			"id": 105102
		},
		{
			"name": "Gemstone",
			"id": 401114
		}
	],
	"displayName": "Gold",
	"apiMetaData": {
		"code": 401214,
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
