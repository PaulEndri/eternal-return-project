import Item from '../../types/Item';

export const ColdNoodles: Item = {
	"id": "Cold Noodles",
	"name": "Cold Noodles",
	"href": "/Cold_Noodles",
	"buildsFrom": [
		{
			"name": "Ramen",
			"id": "Ramen"
		},
		{
			"name": "Ice Water",
			"id": "Ice Water"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Ramen": 1,
		"Ice": 1,
		"Water": 1
	},
	"stats": {
		"heal": 650
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
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
