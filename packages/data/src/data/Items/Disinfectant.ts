import Item from '../../types/Item';

export const Disinfectant: Item = {
	"id": 302213,
	"name": "Disinfectant",
	"buildsFrom": [
		401111,
		302107
	],
	"buildsInto": [
		302324
	],
	"requirements": {
		"Alcohol": 1,
		"Adhesive Bandage": 1
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
	"displayName": "Disinfectant",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302213,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
