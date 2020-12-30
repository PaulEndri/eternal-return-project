import Item from '../../types/Item';

export const SpicyFishStew: Item = {
	"id": "Spicy Fish Stew",
	"name": "Spicy Fish Stew",
	"href": "/Spicy_Fish_Stew",
	"buildsFrom": [
		{
			"name": "Carp",
			"id": "Carp"
		},
		{
			"name": "Boiling Water",
			"id": 301201
		}
	],
	"buildsInto": [],
	"requirements": {
		"Carp": 1,
		"Water": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 550
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
