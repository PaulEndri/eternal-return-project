import Item from '../../types/Item';

export const Bun: Item = {
	"id": 302225,
	"name": "Bun",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Bread"
		},
		{
			"name": "Scissors",
			"id": "Coffee"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Bread": 1,
		"Coffee": 1
	},
	"stats": {
		"heal": 600
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Bun",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302225,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
