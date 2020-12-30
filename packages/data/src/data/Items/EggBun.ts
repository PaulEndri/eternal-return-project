import Item from '../../types/Item';

export const EggBun: Item = {
	"id": "Egg Bun",
	"name": "Egg Bun",
	"href": "/Egg_Bun",
	"buildsFrom": [
		{
			"name": "Egg",
			"id": "Egg"
		},
		{
			"name": "Bread",
			"id": "Bread"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Egg": 1,
		"Bread": 1
	},
	"stats": {
		"heal": 400
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
