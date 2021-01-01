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
			"id": 502202
		},
		{
			"name": "Jungle Guillotine",
			"id": 502303
		},
		{
			"name": "Explosive Trap",
			"id": 502306
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Common",
	"code": "쥐덫",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Pond": 7,
		"Cemetery": 6,
		"Beach": 5
	},
	"foundQuantity": 2,
	"displayName": "Mousetrap",
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
