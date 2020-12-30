import Item from '../../types/Item';

export const FriedChicken: Item = {
	"id": "Fried Chicken",
	"name": "Fried Chicken",
	"href": "/Fried_Chicken",
	"buildsFrom": [
		{
			"name": "Meat",
			"id": "Meat"
		},
		{
			"name": "Heated Oil",
			"id": 401203
		}
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
