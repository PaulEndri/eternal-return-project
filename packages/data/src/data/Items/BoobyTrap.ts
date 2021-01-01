import Item from '../../types/Item';

export const BoobyTrap: Item = {
	"id": 502205,
	"name": "BoobyTrap",
	"buildsFrom": [
		{
			"name": "Snare",
			"id": 502102
		},
		{
			"name": "Glue",
			"id": 401116
		}
	],
	"buildsInto": [
		{
			"name": "Mine",
			"id": 502304
		}
	],
	"requirements": {
		"Snare": 1,
		"Glue": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Booby Trap",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502205,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
