import Item from '../../types/Item';

export const StirFriedRamen: Item = {
	"id": 302327,
	"name": "StirFriedRamen",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Ramen"
		},
		{
			"name": "Scissors",
			"id": "Heated Oil"
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
	"displayName": "Stir Fried Ramen",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302327,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
