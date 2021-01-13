import Item from '../../types/Item';

export const BakedPotato: Item = {
	"id": 302303,
	"name": "BakedPotato",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Potato"
		},
		{
			"name": "Scissors",
			"id": "Heated Stone"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Potato": 1,
		"Stone": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 600
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "Just add butter and salt for an fantastic side dish!",
	"displayName": "Baked Potato",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302303,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
