import Item from '../../types/Item';

export const WhiskyBonbon: Item = {
	"id": 302236,
	"name": "WhiskyBonbon",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Whiskey"
		},
		{
			"name": "Scissors",
			"id": "Chocolate"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Whiskey": 1,
		"Chocolate": 1
	},
	"stats": {
		"heal": 400
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"displayName": "Whisky Bonbon",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302236,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
