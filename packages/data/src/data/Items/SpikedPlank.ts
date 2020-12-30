import Item from '../../types/Item';

export const SpikedPlank: Item = {
	"id": 502201,
	"name": "Spiked Plank",
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
			"id": "Hidden Maiden"
		},
		{
			"name": "Remote Mine",
			"id": "Remote Mine"
		}
	],
	"requirements": {
		"Mousetrap": 1,
		"Nail": 1
	},
	"stats": {
		"attackPower": 6
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
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
