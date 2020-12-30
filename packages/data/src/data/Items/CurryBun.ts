import Item from '../../types/Item';

export const CurryBun: Item = {
	"id": "Curry Bun",
	"name": "Curry Bun",
	"href": "/Curry_Bun",
	"buildsFrom": [
		{
			"name": "Curry Powder",
			"id": "Curry Powder"
		},
		{
			"name": "Bread",
			"id": "Bread"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Curry Powder": 1,
		"Bread": 1
	},
	"stats": {
		"heal": 360
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
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
