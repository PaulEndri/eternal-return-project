import Item from '../../types/Item';

export const SpicyFishStew: Item = {
	"id": 302301,
	"name": "SpicyFishStew",
	"buildsFrom": [
		302109,
		301201
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
	"displayName": "Spicy Fish Stew",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302301,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
