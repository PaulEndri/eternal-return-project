import Item from '../../types/Item';

export const BaconandGarlicSticks: Item = {
	"id": "Bacon and Garlic Sticks",
	"name": "Bacon and Garlic Sticks",
	"href": "/Bacon_and_Garlic_Sticks",
	"buildsFrom": [
		{
			"name": "Garlic",
			"id": "Garlic"
		},
		{
			"name": "Meat",
			"id": "Meat"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Garlic": 1,
		"Meat": 1
	},
	"stats": {
		"heal": 650
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
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
