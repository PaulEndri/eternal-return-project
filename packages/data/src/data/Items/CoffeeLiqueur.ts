import Item from '../../types/Item';

export const CoffeeLiqueur: Item = {
	"id": "Coffee Liqueur",
	"name": "Coffee Liqueur",
	"href": "/Coffee_Liqueur",
	"buildsFrom": [
		{
			"name": "Coffee",
			"id": "Coffee"
		},
		{
			"name": "Alcohol",
			"id": 401111
		}
	],
	"buildsInto": [
		{
			"name": "White Russian",
			"id": "White Russian"
		},
		{
			"name": "Mocha Bread",
			"id": "Mocha Bread"
		}
	],
	"requirements": {
		"Coffee": 1,
		"Alcohol": 1
	},
	"stats": {
		"spRestore": 530
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
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
