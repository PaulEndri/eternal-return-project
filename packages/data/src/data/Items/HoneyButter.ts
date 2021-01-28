import Item from '../../types/Item';

export const HoneyButter: Item = {
	"id": 302315,
	"name": "HoneyButter",
	"buildsFrom": [
		302206,
		301101
	],
	"buildsInto": [],
	"requirements": {
		"Milk": 1,
		"Branch": 1,
		"Honey": 1
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
	"displayName": "Honey Butter",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302315,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
