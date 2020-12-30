import Item from '../../types/Item';

export const Ramen: Item = {
	"id": "Ramen",
	"name": "Ramen",
	"href": "/Ramen",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Hot Ramen",
			"id": "Hot Ramen"
		},
		{
			"name": "Stir Fried Ramen",
			"id": "Stir Fried Ramen"
		},
		{
			"name": "Cold Noodles",
			"id": "Cold Noodles"
		}
	],
	"requirements": {},
	"stats": {
		"heal": 200
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Alley": 6,
		"Archery Range": 5,
		"Dock": 6
	},
	"foundQuantity": 1,
	"description": "Put it in a bag, smash it into pieces, add some spices, shake it up, and eat.",
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
