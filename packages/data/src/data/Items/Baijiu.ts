import Item from '../../types/Item';

export const Baijiu: Item = {
	"id": "Baijiu",
	"name": "Baijiu",
	"href": "/Baijiu",
	"buildsFrom": [
		{
			"name": "Alcohol",
			"id": 401111
		},
		{
			"name": "Lighter",
			"id": 401107
		}
	],
	"buildsInto": [
		{
			"name": "Kaoliang Liquor",
			"id": "Kaoliang Liquor"
		},
		{
			"name": "Flower Liquor",
			"id": "Flower Liquor"
		},
		{
			"name": "Herbal Liquor",
			"id": "Herbal Liquor"
		}
	],
	"requirements": {
		"Alcohol": 1,
		"Lighter": 1
	},
	"stats": {
		"spRestore": 1000
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
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
