import Item from '../../types/Item';

export const Gunpowder: Item = {
	"id": 401121,
	"name": "Gunpowder",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Shatter Shell Gauntlet",
			"id": 110402
		},
		{
			"name": "Grenade",
			"id": 112202
		},
		{
			"name": "Mighty Bow",
			"id": 114303
		},
		{
			"name": "STG-44",
			"id": "STG-44"
		},
		{
			"name": "Dynamite",
			"id": 502203
		},
		{
			"name": "Mine",
			"id": "Mine"
		},
		{
			"name": "Explosive Trap",
			"id": "Explosive Trap"
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Temple": 7,
		"Archery Range": 6,
		"Cemetery": 7
	},
	"foundQuantity": 1,
	"description": "Explosive powder. It goes in guns. Boom.",
	"apiMetaData": {
		"code": 401121,
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
