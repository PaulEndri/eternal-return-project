import Item from '../../types/Item';

export const Ramen: Item = {
	"id": 302113,
	"name": "Ramen",
	"buildsFrom": [],
	"buildsInto": [
		302307,
		302327,
		302328
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
		"Temple": 4,
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
