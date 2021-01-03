import Item from '../../types/Item';

export const PotatoSoup: Item = {
	"id": 302228,
	"name": "PotatoSoup",
	"buildsFrom": [
		{
			"name": "Potato",
			"id": 302102
		},
		{
			"name": "Milk",
			"id": 301108
		}
	],
	"buildsInto": [],
	"requirements": {
		"Potato": 1,
		"Milk": 1
	},
	"stats": {
		"heal": 600
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Potato Soup",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302228,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
