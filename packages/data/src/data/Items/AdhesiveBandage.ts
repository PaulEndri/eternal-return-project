import Item from '../../types/Item';

export const AdhesiveBandage: Item = {
	"id": 302107,
	"name": "AdhesiveBandage",
	"buildsFrom": [],
	"buildsInto": [
		302213
	],
	"requirements": {},
	"stats": {
		"heal": 200
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Hospital": 4
	},
	"foundQuantity": 1,
	"description": "Useful because it sticks to skin well and doesn't fall off easily. Just don't keep it on for too long.",
	"displayName": "Adhesive Bandage",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302107,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
