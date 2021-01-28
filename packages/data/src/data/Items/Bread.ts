import Item from '../../types/Item';

export const Bread: Item = {
	"id": 302110,
	"name": "Bread",
	"buildsFrom": [],
	"buildsInto": [
		302205,
		302209,
		302216,
		302225,
		302226,
		302227,
		302230,
		302234,
		302238,
		302308,
		302319
	],
	"requirements": {},
	"stats": {
		"heal": 200
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"School": 6,
		"Chapel": 4,
		"Dock": 4
	},
	"foundQuantity": 1,
	"description": "A staple food. You can also staple it to trees.",
	"displayName": "Bread",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302110,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
