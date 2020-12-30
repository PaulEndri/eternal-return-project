import Item from '../../types/Item';

export const FishCutlet: Item = {
	"id": "Fish Cutlet",
	"name": "Fish Cutlet",
	"href": "/Fish_Cutlet",
	"buildsFrom": [
		{
			"name": "Cod",
			"id": "Cod"
		},
		{
			"name": "Heated Oil",
			"id": 401203
		}
	],
	"buildsInto": [
		{
			"name": "Fish and Chips",
			"id": "Fish and Chips"
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
