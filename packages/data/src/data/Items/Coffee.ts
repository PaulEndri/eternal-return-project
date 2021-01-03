import Item from '../../types/Item';

export const Coffee: Item = {
	"id": 301106,
	"name": "Coffee",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Ice Coffee",
			"id": 301206
		},
		{
			"name": "Coffee Liqueur",
			"id": 301208
		},
		{
			"name": "Latte",
			"id": 301210
		},
		{
			"name": "Americano",
			"id": 301304
		},
		{
			"name": "Bun",
			"id": 302225
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
	"displayName": "Coffee",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301106,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
