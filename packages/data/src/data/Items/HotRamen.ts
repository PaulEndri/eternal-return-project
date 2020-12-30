import Item from '../../types/Item';

export const HotRamen: Item = {
	"id": "Hot Ramen",
	"name": "Hot Ramen",
	"href": "/Hot_Ramen",
	"buildsFrom": [
		{
			"name": "Ramen",
			"id": "Ramen"
		},
		{
			"name": "Boiling Water",
			"id": 301201
		}
	],
	"buildsInto": [
		{
			"name": "Garlic Ramen",
			"id": "Garlic Ramen"
		}
	],
	"requirements": {
		"Ramen": 1,
		"Water": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 550
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "With chopped onions and egg it tastes heavenly. You probably can't stop yourself from slurping it up when you eat.",
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
