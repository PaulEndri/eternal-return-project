import Item from '../../types/Item';

export const Ramen: Item = {
	"id": 302113,
	"name": "Ramen",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Hot Ramen",
			"id": 302307
		},
		{
			"name": "Stir Fried Ramen",
			"id": 302327
		},
		{
			"name": "Cold Noodles",
			"id": 302328
		}
	],
	"requirements": {},
	"stats": {
		"heal": 200
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Alley": 6,
		"Archery Range": 5,
		"Dock": 6
	},
	"foundQuantity": 1,
	"description": "Put it in a bag, smash it into pieces, add some spices, shake it up, and eat.",
	"displayName": "Ramen",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302113,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
