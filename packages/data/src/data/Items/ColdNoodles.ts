import Item from '../../types/Item';

export const ColdNoodles: Item = {
	"id": 302328,
	"name": "ColdNoodles",
	"buildsFrom": [
		302113,
		301216
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
	"displayName": "Cold Noodles",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302328,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
