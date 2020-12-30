import Item from '../../types/Item';

export const CurryPowder: Item = {
	"id": "Curry Powder",
	"name": "Curry Powder",
	"href": "/Curry_Powder",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Tandoori Chicken",
			"id": "Tandoori Chicken"
		},
		{
			"name": "Curry Bun",
			"id": "Curry Bun"
		},
		{
			"name": "Curry",
			"id": "Curry"
		},
		{
			"name": "Curry Croquette",
			"id": "Curry Croquette"
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
		"Factory": 5,
		"Uptown": 5
	},
	"foundQuantity": 1,
	"description": "Would taste great if it were cooked with hot water.",
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
