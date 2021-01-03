import Item from '../../types/Item';

export const Snare: Item = {
	"id": 502102,
	"name": "Snare",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Bamboo Trap",
			"id": 502204
		},
		{
			"name": "Booby Trap",
			"id": 502205
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Pond": 6,
		"Archery Range": 5,
		"Forest": 5,
		"Chapel": 5,
		"Beach": 5,
		"Dock": 6
	},
	"foundQuantity": 2,
	"displayName": "Snare",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502102,
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
