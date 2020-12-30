import Item from '../../types/Item';

export const HoneyButter: Item = {
	"id": "Honey Butter",
	"name": "Honey Butter",
	"href": "/Honey_Butter",
	"buildsFrom": [
		{
			"name": "Butter",
			"id": "Butter"
		},
		{
			"name": "Honey",
			"id": 301101
		}
	],
	"buildsInto": [],
	"requirements": {
		"Milk": 1,
		"Branch": 1,
		"Honey": 1
	},
	"stats": {
		"heal": 650
	},
	"rarity": "Rare",
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
