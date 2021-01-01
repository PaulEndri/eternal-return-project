import Item from '../../types/Item';

export const Potato: Item = {
	"id": 302102,
	"name": "Potato",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Potato Bread",
			"id": 302227
		},
		{
			"name": "Potato Soup",
			"id": 302228
		},
		{
			"name": "French Fries",
			"id": 302302
		},
		{
			"name": "Baked Potato",
			"id": 302303
		},
		{
			"name": "Butter-Fried Potatoes",
			"id": 302325
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
	"displayName": "Potato",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302102,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 6
}
