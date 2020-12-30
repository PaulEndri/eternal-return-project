import Item from '../../types/Item';

export const IronOre: Item = {
	"id": 401118,
	"name": "Iron Ore",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Iron Knuckles",
			"id": 110202
		},
		{
			"name": "Rapier",
			"id": 120201
		},
		{
			"name": "Steel",
			"id": 401201
		},
		{
			"name": "Enhanced Mousetrap",
			"id": "Enhanced Mousetrap"
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Cemetery": 7,
		"Hotel": 7,
		"Forest": 7
	},
	"foundQuantity": 3,
	"description": "Just the ore. Extract the iron to make it useful!",
	"apiMetaData": {
		"code": 401118,
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
