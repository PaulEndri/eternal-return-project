import Item from '../../types/Item';

export const LemonIceCream: Item = {
	"id": "Lemon Ice Cream",
	"name": "Lemon Ice Cream",
	"href": "/Lemon_Ice_Cream",
	"buildsFrom": [
		{
			"name": "Lemon",
			"id": "Lemon"
		},
		{
			"name": "Egg",
			"id": "Egg"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Lemon": 1,
		"Egg": 1
	},
	"stats": {
		"heal": 500
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
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
