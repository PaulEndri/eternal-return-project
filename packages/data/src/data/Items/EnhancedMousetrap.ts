import Item from '../../types/Item';

export const EnhancedMousetrap: Item = {
	"id": 502202,
	"name": "EnhancedMousetrap",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Mousetrap"
		},
		{
			"name": "Scissors",
			"id": "Iron Ore"
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
