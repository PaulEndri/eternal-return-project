import Item from '../../types/Item';

export const FishCutlet: Item = {
	"id": 302326,
	"name": "FishCutlet",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Cod"
		},
		{
			"name": "Scissors",
			"id": "Heated Oil"
		}
	],
	"buildsInto": [
		{
			"name": "Fish and Chips",
			"id": 302401
		}
	],
	"requirements": {
		"Cod": 1,
		"Oil": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 700
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Fish Cutlet",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302326,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
