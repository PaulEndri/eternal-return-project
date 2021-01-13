import Item from '../../types/Item';

export const GarlicBread: Item = {
	"id": 302205,
	"name": "GarlicBread",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Bread"
		},
		{
			"name": "Scissors",
			"id": "Garlic"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Bread": 1,
		"Garlic": 1
	},
	"stats": {
		"heal": 500
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "One of the most delicious substances known to man.",
	"displayName": "Garlic Bread",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302205,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
