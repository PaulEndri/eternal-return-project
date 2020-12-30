import Item from '../../types/Item';

export const FishandChips: Item = {
	"id": "Fish and Chips",
	"name": "Fish and Chips",
	"href": "/Fish_and_Chips",
	"buildsFrom": [
		{
			"name": "Fish Cutlet",
			"id": "Fish Cutlet"
		},
		{
			"name": "French Fries",
			"id": "French Fries"
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
