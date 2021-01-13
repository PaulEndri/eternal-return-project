import Item from '../../types/Item';

export const ChainLeggings: Item = {
	"id": 204202,
	"name": "ChainLeggings",
	"buildsInto": [
		{
			"name": "Mithril Boots",
			"id": 204407
		},
		{
			"name": "Bucephalus",
			"id": 204408
		}
	],
	"requirements": {
		"Tights": 1,
		"Steel Chain": 1
	},
	"stats": {
		"defense": 10,
		"moveSpeed": 0.14
	},
	"rarity": "Uncommon",
	"code": "체인레깅스",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Protective leg equipment. Very effective and easily made.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 204103
		},
		{
			"name": "Scissors",
			"id": 119101
		}
	],
	"displayName": "Chain Leggings",
	"apiMetaData": {
		"code": 204202,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
