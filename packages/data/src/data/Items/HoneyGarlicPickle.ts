import Item from '../../types/Item';

export const HoneyGarlicPickle: Item = {
	"id": 302232,
	"name": "HoneyGarlicPickle",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Garlic"
		},
		{
			"name": "Scissors",
			"id": "Honey"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Garlic": 1,
		"Honey": 1
	},
	"stats": {
		"heal": 480
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"description": "",
	"displayName": "Honey Garlic Pickle",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302232,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
