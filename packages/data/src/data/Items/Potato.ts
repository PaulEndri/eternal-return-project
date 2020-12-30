import Item from '../../types/Item';

export const Potato: Item = {
	"id": "Potato",
	"name": "Potato",
	"href": "/Potato",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Potato Bread",
			"id": "Potato Bread"
		},
		{
			"name": "Potato Soup",
			"id": "Potato Soup"
		},
		{
			"name": "French Fries",
			"id": "French Fries"
		},
		{
			"name": "Baked Potato",
			"id": "Baked Potato"
		},
		{
			"name": "Butter-Fried Potatoes",
			"id": "Butter-Fried Potatoes"
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
	"description": "Boil them, mash them, or stick them in a stew. They're also delicious eaten raw. Potatoes are magic.",
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
