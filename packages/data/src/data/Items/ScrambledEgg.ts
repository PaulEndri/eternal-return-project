import Item from '../../types/Item';

export const ScrambledEgg: Item = {
	"id": 302309,
	"name": "ScrambledEgg",
	"buildsFrom": [
		{
			"name": "Egg",
			"id": 302112
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
	"displayName": "Scrambled Egg",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302309,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
