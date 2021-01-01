import Item from '../../types/Item';

export const Carp: Item = {
	"id": 302109,
	"name": "Carp",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Carp Bread",
			"id": 302209
		},
		{
			"name": "Spicy Fish Stew",
			"id": 302301
		},
		{
			"name": "Baked Carp",
			"id": 302304
		}
	],
	"requirements": {},
	"stats": {
		"heal": 130
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "A carp is actually good for throwing. I don't think the carp likes it though.",
	"displayName": "Carp",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302109,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 5
}
