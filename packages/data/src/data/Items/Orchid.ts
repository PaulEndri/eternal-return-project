import Item from '../../types/Item';

export const Orchid: Item = {
	"id": "Orchid",
	"name": "Orchid",
	"href": "/Orchid",
	"buildsFrom": [
		{
			"name": "Oriental Herb",
			"id": "Oriental Herb"
		},
		{
			"name": "Flower",
			"id": 205102
		}
	],
	"buildsInto": [
		{
			"name": "Healing Potion",
			"id": "Healing Potion"
		}
	],
	"requirements": {
		"Oriental Herb": 1,
		"Flower": 1
	},
	"stats": {
		"heal": 500
	},
	"rarity": "Uncommon",
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
