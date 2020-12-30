import Item from '../../types/Item';

export const ChainLeggings: Item = {
	"id": 204202,
	"name": "Chain Leggings",
	"buildsFrom": [
		{
			"name": "Tights",
			"id": 204103
		},
		{
			"name": "Steel Chain",
			"id": 119101
		}
	],
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Protective leg equipment. Very effective and easily made.",
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
