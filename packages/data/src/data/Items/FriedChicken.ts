import Item from '../../types/Item';

export const FriedChicken: Item = {
	"id": 302316,
	"name": "FriedChicken",
	"buildsFrom": [
		302111,
		401203
	],
	"buildsInto": [],
	"requirements": {
		"Meat": 1,
		"Oil": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 510
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "If it can fly and has wings and a beak, it's definitely a chicken. It could actually be a crow, pigeon, or whatever, but once you fry it, it will still be Fried Chicken.",
	"displayName": "Fried Chicken",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302316,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
