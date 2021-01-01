import Item from '../../types/Item';

export const Orchid: Item = {
	"id": 302218,
	"name": "Orchid",
	"buildsFrom": [
		{
			"name": "Oriental Herb",
			"id": 302116
		},
		{
			"name": "Flower",
			"id": 205102
		}
	],
	"buildsInto": [
		{
			"name": "Healing Potion",
			"id": 302317
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
	"displayName": "Orchid",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302218,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
