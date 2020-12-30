import Item from '../../types/Item';

export const Mousetrap: Item = {
	"id": 502103,
	"name": "Mousetrap",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Spiked Plank",
			"id": 502201
		},
		{
			"name": "Enhanced Mousetrap",
			"id": "Enhanced Mousetrap"
		},
		{
			"name": "Jungle Guillotine",
			"id": "Jungle Guillotine"
		},
		{
			"name": "Explosive Trap",
			"id": "Explosive Trap"
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 6
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Pond": 7,
		"Cemetery": 6,
		"Beach": 5
	},
	"foundQuantity": 2,
	"apiMetaData": {
		"code": 502103,
		"category": "Special",
		"type": "Summon"
	},
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
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
