import Item from '../../types/Item';

export const EnhancedMousetrap: Item = {
	"id": 502202,
	"name": "EnhancedMousetrap",
	"buildsFrom": [
		{
			"name": "Mousetrap",
			"id": 502103
		},
		{
			"name": "Iron Ore",
			"id": 401118
		}
	],
	"buildsInto": [],
	"requirements": {
		"Mousetrap": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Enhanced Mousetrap",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502202,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
