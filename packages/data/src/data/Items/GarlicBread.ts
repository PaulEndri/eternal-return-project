import Item from '../../types/Item';

export const GarlicBread: Item = {
	"id": "Garlic Bread",
	"name": "Garlic Bread",
	"href": "/Garlic_Bread",
	"buildsFrom": [
		{
			"name": "Bread",
			"id": "Bread"
		},
		{
			"name": "Garlic",
			"id": "Garlic"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Bread": 1,
		"Garlic": 1
	},
	"stats": {
		"heal": 500
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "One of the most delicious substances known to man.",
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
