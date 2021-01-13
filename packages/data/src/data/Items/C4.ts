import Item from '../../types/Item';

export const C4: Item = {
	"id": 502404,
	"name": "C4",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "RDX"
		},
		{
			"name": "Scissors",
			"id": "White Powder"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Piano Wire": 1,
		"Gunpowder": 1,
		"Scrap Metal": 1,
		"Chalk": 1,
		"Stone": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Epic",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"displayName": "C-4",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502404,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
