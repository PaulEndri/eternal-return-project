import Item from '../../types/Item';

export const HerbalLiquor: Item = {
	"id": "Herbal Liquor",
	"name": "Herbal Liquor",
	"href": "/Herbal_Liquor",
	"buildsFrom": [
		{
			"name": "Baijiu",
			"id": "Baijiu"
		},
		{
			"name": "Oriental Herb",
			"id": "Oriental Herb"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Alcohol": 1,
		"Lighter": 1,
		"Oriental Herb": 1
	},
	"stats": {
		"spRestore": 500
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 5,
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
