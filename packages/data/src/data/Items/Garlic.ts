import Item from '../../types/Item';

export const Garlic: Item = {
	"id": 302106,
	"name": "Garlic",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Garlic Bread",
			"id": 302205
		},
		{
			"name": "Bacon and Garlic Sticks",
			"id": 302224
		},
		{
			"name": "Honey Garlic Pickle",
			"id": 302232
		},
		{
			"name": "Garlic Ramen",
			"id": 302402
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
	"displayName": "Garlic",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302106,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
