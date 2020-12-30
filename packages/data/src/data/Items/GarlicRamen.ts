import Item from '../../types/Item';

export const GarlicRamen: Item = {
	"id": "Garlic Ramen",
	"name": "Garlic Ramen",
	"href": "/Garlic_Ramen",
	"buildsFrom": [
		{
			"name": "Hot Ramen",
			"id": "Hot Ramen"
		},
		{
			"name": "Garlic",
			"id": "Garlic"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Ramen": 1,
		"Water": 1,
		"Lighter": 1,
		"Garlic": 1
	},
	"stats": {
		"heal": 700
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "You can't compete with expertly cooked ramen.",
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
