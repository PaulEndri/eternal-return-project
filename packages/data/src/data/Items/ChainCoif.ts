import Item from '../../types/Item';

export const ChainCoif: Item = {
	"id": 201204,
	"name": "ChainCoif",
	"buildsFrom": [
		{
			"name": "Hat",
			"id": 201102
		},
		{
			"name": "Steel Chain",
			"id": 119101
		}
	],
	"buildsInto": [
		{
			"name": "Close Helm",
			"id": 201402
		},
		{
			"name": "Mithril Helm",
			"id": 201403
		}
	],
	"requirements": {
		"Hat": 1,
		"Steel Chain": 1
	},
	"stats": {
		"cooldownReduction": 0.1,
		"defense": 14
	},
	"rarity": "Uncommon",
	"code": "사슬코이프",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A piece of defensive equipment that was commonly used in Medieval Europe. It's quite heavy, but has good defensive capabilities.",
	"displayName": "Chain Coif",
	"apiMetaData": {
		"code": 201204,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
