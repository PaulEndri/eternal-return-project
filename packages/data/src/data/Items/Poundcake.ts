import Item from '../../types/Item';

export const Poundcake: Item = {
	"id": "Poundcake",
	"name": "Poundcake",
	"href": "/Poundcake",
	"buildsFrom": [
		{
			"name": "Butter",
			"id": "Butter"
		},
		{
			"name": "Bread",
			"id": "Bread"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Milk": 1,
		"Branch": 1,
		"Bread": 1
	},
	"stats": {
		"heal": 600
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
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
