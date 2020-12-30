import Item from '../../types/Item';

export const OrientalConcoction: Item = {
	"id": "Oriental Concoction",
	"name": "Oriental Concoction",
	"href": "/Oriental_Concoction",
	"buildsFrom": [
		{
			"name": "Oriental Herb",
			"id": "Oriental Herb"
		},
		{
			"name": "Boiling Water",
			"id": 301201
		}
	],
	"buildsInto": [],
	"requirements": {
		"Oriental Herb": 1,
		"Water": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 600
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "A concoction prepared by brewing medicial herbs. Revitalizes the body.",
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
