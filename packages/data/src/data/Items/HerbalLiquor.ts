import Item from '../../types/Item';

export const HerbalLiquor: Item = {
	"id": 301305,
	"name": "HerbalLiquor",
	"buildsFrom": [
		{
			"name": "Baijiu",
			"id": 301204
		},
		{
			"name": "Oriental Herb",
			"id": 302116
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
	"displayName": "Herbal Liquor",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301305,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
