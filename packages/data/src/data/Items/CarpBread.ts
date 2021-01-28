import Item from '../../types/Item';

export const CarpBread: Item = {
	"id": 302209,
	"name": "CarpBread",
	"buildsFrom": [
		302110,
		302109
	],
	"buildsInto": [],
	"requirements": {
		"Bread": 1,
		"Carp": 1
	},
	"stats": {
		"heal": 400
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "Carefully contemplate where to take your first bite.. the head or the tail?",
	"displayName": "Carp Bread",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302209,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
