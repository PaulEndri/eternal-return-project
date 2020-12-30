import Item from '../../types/Item';

export const StirFriedRamen: Item = {
	"id": "Stir Fried Ramen",
	"name": "Stir Fried Ramen",
	"href": "/Stir_Fried_Ramen",
	"buildsFrom": [
		{
			"name": "Ramen",
			"id": "Ramen"
		},
		{
			"name": "Heated Oil",
			"id": 401203
		}
	],
	"buildsInto": [],
	"requirements": {
		"Ramen": 1,
		"Oil": 1,
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
	"description": "Are there.. too many different ways to eat ramen?",
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
