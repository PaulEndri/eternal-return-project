import Item from '../../types/Item';

export const Egg: Item = {
	"id": "Egg",
	"name": "Egg",
	"href": "/Egg",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Fish Fillet With Egg",
			"id": "Fish Fillet With Egg"
		},
		{
			"name": "Lemon Ice Cream",
			"id": "Lemon Ice Cream"
		},
		{
			"name": "Egg Bun",
			"id": "Egg Bun"
		},
		{
			"name": "Easter Egg",
			"id": "Easter Egg"
		},
		{
			"name": "Scrambled Egg",
			"id": "Scrambled Egg"
		},
		{
			"name": "Boiled Egg",
			"id": "Boiled Egg"
		}
	],
	"requirements": {},
	"stats": {
		"heal": 200
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Archery Range": 5,
		"Cemetery": 5,
		"Forest": 6
	},
	"foundQuantity": 1,
	"description": "",
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
