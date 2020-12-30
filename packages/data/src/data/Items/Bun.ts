import Item from '../../types/Item';

export const Bun: Item = {
	"id": "Bun",
	"name": "Bun",
	"href": "/Bun",
	"buildsFrom": [
		{
			"name": "Bread",
			"id": "Bread"
		},
		{
			"name": "Coffee",
			"id": "Coffee"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Bread": 1,
		"Coffee": 1
	},
	"stats": {
		"heal": 600
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
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
