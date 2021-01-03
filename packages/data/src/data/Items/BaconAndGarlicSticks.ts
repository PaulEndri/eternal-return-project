import Item from '../../types/Item';

export const BaconAndGarlicSticks: Item = {
	"id": 302224,
	"name": "BaconAndGarlicSticks",
	"buildsFrom": [
		{
			"name": "Garlic",
			"id": 302106
		},
		{
			"name": "Meat",
			"id": 302111
		}
	],
	"buildsInto": [],
	"requirements": {
		"Garlic": 1,
		"Meat": 1
	},
	"stats": {
		"heal": 650
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Bacon and Garlic Sticks",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302224,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
