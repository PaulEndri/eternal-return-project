import Item from '../../types/Item';

export const ScrambledEgg: Item = {
	"id": "Scrambled Egg",
	"name": "Scrambled Egg",
	"href": "/Scrambled_Egg",
	"buildsFrom": [
		{
			"name": "Egg",
			"id": "Egg"
		},
		{
			"name": "Heated Oil",
			"id": 401203
		}
	],
	"buildsInto": [],
	"requirements": {
		"Egg": 1,
		"Oil": 1,
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
