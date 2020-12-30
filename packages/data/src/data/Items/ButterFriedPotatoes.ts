import Item from '../../types/Item';

export const ButterFriedPotatoes: Item = {
	"id": "Butter-Fried Potatoes",
	"name": "Butter-Fried Potatoes",
	"href": "/Butter-Fried_Potatoes",
	"buildsFrom": [
		{
			"name": "Potato",
			"id": "Potato"
		},
		{
			"name": "Butter",
			"id": "Butter"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Potato": 1,
		"Milk": 1,
		"Branch": 1
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
