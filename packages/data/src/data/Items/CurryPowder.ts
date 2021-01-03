import Item from '../../types/Item';

export const CurryPowder: Item = {
	"id": 302120,
	"name": "CurryPowder",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Tandoori Chicken",
			"id": 302222
		},
		{
			"name": "Curry Bun",
			"id": 302238
		},
		{
			"name": "Curry",
			"id": 302313
		},
		{
			"name": "Curry Croquette",
			"id": 302322
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
	"displayName": "Curry Powder",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302120,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
