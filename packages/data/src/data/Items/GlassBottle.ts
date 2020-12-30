import Item from '../../types/Item';

export const GlassBottle: Item = {
	"id": 112104,
	"name": "Glass Bottle",
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
			"id": "Water Bottle"
		},
		{
			"name": "Healing Potion",
			"id": "Healing Potion"
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Avenue": 7,
		"Chapel": 6,
		"Dock": 7
	},
	"foundQuantity": 2,
	"description": "A glass bottle that is good for throwing.",
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
