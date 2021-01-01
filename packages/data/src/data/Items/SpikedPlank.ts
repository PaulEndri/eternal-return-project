import Item from '../../types/Item';

export const SpikedPlank: Item = {
	"id": 502201,
	"name": "SpikedPlank",
	"buildsFrom": [
		{
			"name": "Mousetrap",
			"id": 502103
		},
		{
			"name": "Nail",
			"id": 401101
		}
	],
	"buildsInto": [
		{
			"name": "Stingburst",
			"id": 502402
		},
		{
			"name": "Hidden Maiden",
			"id": 502407
		},
		{
			"name": "Remote Mine",
			"id": 502501
		}
	],
	"requirements": {
		"Mousetrap": 1,
		"Nail": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Uncommon",
	"code": "가시발판",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Spiked Plank",
	"apiMetaData": {
		"code": 502201,
		"category": "Special",
		"type": "Summon"
	},
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
