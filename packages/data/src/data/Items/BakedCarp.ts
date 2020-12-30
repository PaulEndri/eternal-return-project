import Item from '../../types/Item';

export const BakedCarp: Item = {
	"id": "Baked Carp",
	"name": "Baked Carp",
	"href": "/Baked_Carp",
	"buildsFrom": [
		{
			"name": "Carp",
			"id": "Carp"
		},
		{
			"name": "Heated Stone",
			"id": 401215
		}
	],
	"buildsInto": [],
	"requirements": {
		"Carp": 1,
		"Stone": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 600
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "Fish is actually one of the most common foods to choke on.",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
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
