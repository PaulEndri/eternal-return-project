import Item from '../../types/Item';

export const KaoliangLiquor: Item = {
	"id": "Kaoliang Liquor",
	"name": "Kaoliang Liquor",
	"href": "/Kaoliang_Liquor",
	"buildsFrom": [
		{
			"name": "Baijiu",
			"id": "Baijiu"
		},
		{
			"name": "Lighter",
			"id": 401107
		}
	],
	"buildsInto": [],
	"requirements": {
		"Alcohol": 1,
		"Lighter": 2
	},
	"stats": {
		"spRestore": 1080
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
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
