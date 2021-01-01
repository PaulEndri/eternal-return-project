import Item from '../../types/Item';

export const OrientalConcoction: Item = {
	"id": 302314,
	"name": "OrientalConcoction",
	"buildsFrom": [
		{
			"name": "Oriental Herb",
			"id": 302116
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
	"displayName": "Oriental Concoction",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302314,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
