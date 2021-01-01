import Item from '../../types/Item';

export const FishAndChips: Item = {
	"id": 302401,
	"name": "FishAndChips",
	"buildsFrom": [
		{
			"name": "Fish Cutlet",
			"id": 302326
		},
		{
			"name": "French Fries",
			"id": 302302
		}
	],
	"buildsInto": [],
	"requirements": {
		"Cod": 1,
		"Oil": 2,
		"Lighter": 2,
		"Potato": 1
	},
	"stats": {
		"heal": 900
	},
	"rarity": "Epic",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "",
	"displayName": "Fish and Chips",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302401,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
