import Item from '../../types/Item';

export const GlassBottle: Item = {
	"id": 112104,
	"name": "GlassBottle",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Molotov Cocktail",
			"id": 112203
		},
		{
			"name": "Glass Pieces",
			"id": 205204
		},
		{
			"name": "Water Bottle",
			"id": 301203
		},
		{
			"name": "Healing Potion",
			"id": 302317
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "유리병",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Avenue": 7,
		"Chapel": 6,
		"Dock": 7
	},
	"foundQuantity": 2,
	"description": "A glass bottle that is good for throwing.",
	"displayName": "Glass Bottle",
	"apiMetaData": {
		"code": 112104,
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
