import Item from '../../types/Item';

export const FrenchFries: Item = {
	"id": "French Fries",
	"name": "French Fries",
	"href": "/French_Fries",
	"buildsFrom": [
		{
			"name": "Potato",
			"id": "Potato"
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
		"Potato": 1,
		"Oil": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 600
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "This is undoubtedly the ultimate form of potato. Don't deny it.",
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
