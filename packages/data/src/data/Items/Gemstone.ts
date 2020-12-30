import Item from '../../types/Item';

export const Gemstone: Item = {
	"id": 401114,
	"name": "Gemstone",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Muramasa",
			"id": 102402
		},
		{
			"name": "Ruby",
			"id": 401204
		},
		{
			"name": "Gold",
			"id": 401214
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Temple": 8,
		"Pond": 8,
		"Forest": 8,
		"Beach": 7
	},
	"foundQuantity": 1,
	"description": "An unrefined gemstone. Could be worth something in the right hands.",
	"apiMetaData": {
		"code": 401114,
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
