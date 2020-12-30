import Item from '../../types/Item';

export const Garlic: Item = {
	"id": "Garlic",
	"name": "Garlic",
	"href": "/Garlic",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Garlic Bread",
			"id": "Garlic Bread"
		},
		{
			"name": "Bacon and Garlic Sticks",
			"id": "Bacon and Garlic Sticks"
		},
		{
			"name": "Honey Garlic Pickle",
			"id": "Honey Garlic Pickle"
		},
		{
			"name": "Garlic Ramen",
			"id": "Garlic Ramen"
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
		"Temple": 6,
		"Cemetery": 5
	},
	"foundQuantity": 1,
	"description": "A delicious addition to many dishes. Also great for keeping away vampires.",
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
