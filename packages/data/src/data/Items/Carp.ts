import Item from '../../types/Item';

export const Carp: Item = {
	"id": "Carp",
	"name": "Carp",
	"href": "/Carp",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Carp Bread",
			"id": "Carp Bread"
		},
		{
			"name": "Spicy Fish Stew",
			"id": "Spicy Fish Stew"
		},
		{
			"name": "Baked Carp",
			"id": "Baked Carp"
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
