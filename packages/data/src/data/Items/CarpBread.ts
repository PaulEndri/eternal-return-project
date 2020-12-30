import Item from '../../types/Item';

export const CarpBread: Item = {
	"id": "Carp Bread",
	"name": "Carp Bread",
	"href": "/Carp_Bread",
	"buildsFrom": [
		{
			"name": "Bread",
			"id": "Bread"
		},
		{
			"name": "Carp",
			"id": "Carp"
		}
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
