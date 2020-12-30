import Item from '../../types/Item';

export const EnhancedMousetrap: Item = {
	"id": "Enhanced Mousetrap",
	"name": "Enhanced Mousetrap",
	"href": "/Enhanced_Mousetrap",
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
		"attackPower": 6
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
