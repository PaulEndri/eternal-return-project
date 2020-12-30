import Item from '../../types/Item';

export const Coffee: Item = {
	"id": "Coffee",
	"name": "Coffee",
	"href": "/Coffee",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Ice Coffee",
			"id": "Ice Coffee"
		},
		{
			"name": "Coffee Liqueur",
			"id": "Coffee Liqueur"
		},
		{
			"name": "Latte",
			"id": "Latte"
		},
		{
			"name": "Americano",
			"id": "Americano"
		},
		{
			"name": "Bun",
			"id": "Bun"
		}
	],
	"requirements": {},
	"stats": {
		"spRestore": 380
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Cemetery": 5,
		"Uptown": 5,
		"Dock": 6
	},
	"foundQuantity": 1,
	"clientMetaData": {
		"type": "Beverage",
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
