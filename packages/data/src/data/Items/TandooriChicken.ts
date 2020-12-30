import Item from '../../types/Item';

export const TandooriChicken: Item = {
	"id": "Tandoori Chicken",
	"name": "Tandoori Chicken",
	"href": "/Tandoori_Chicken",
	"buildsFrom": [
		{
			"name": "Curry Powder",
			"id": "Curry Powder"
		},
		{
			"name": "Meat",
			"id": "Meat"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Curry Powder": 1,
		"Meat": 1
	},
	"stats": {
		"heal": 600
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
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
