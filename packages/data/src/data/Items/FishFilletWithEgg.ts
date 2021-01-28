import Item from '../../types/Item';

export const FishFilletWithEgg: Item = {
	"id": 302229,
	"name": "FishFilletWithEgg",
	"buildsFrom": [
		302104,
		302112
	],
	"buildsInto": [],
	"requirements": {
		"Cod": 1,
		"Egg": 1
	},
	"stats": {
		"heal": 700
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"displayName": "Fish Fillet With Egg",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302229,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
