import Item from '../../types/Item';

export const Rubber: Item = {
	"id": 401105,
	"name": "Rubber",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Sling",
			"id": 112204
		},
		{
			"name": "Flubber",
			"id": 112304
		},
		{
			"name": "Longbow",
			"id": 114202
		},
		{
			"name": "Power Crossbow",
			"id": 115301
		},
		{
			"name": "Helm of Banneret",
			"id": 201407
		},
		{
			"name": "Diving Suit",
			"id": 202210
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Alley": 7,
		"Archery Range": 5,
		"Dock": 8
	},
	"foundQuantity": 1,
	"description": "A material that is always elastic. Unlike your cheeks, which lose elasticity day by day.",
	"apiMetaData": {
		"code": 401105,
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
