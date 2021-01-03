import Item from '../../types/Item';

export const OrientalHerb: Item = {
	"id": 302116,
	"name": "OrientalHerb",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Herbal Liquor",
			"id": 301305
		},
		{
			"name": "Herbal Medicine",
			"id": 302207
		},
		{
			"name": "Orchid",
			"id": 302218
		},
		{
			"name": "Oriental Concoction",
			"id": 302314
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
		"Temple": 6,
		"Pond": 7,
		"Forest": 6
	},
	"foundQuantity": 1,
	"description": "An herb used in traditional medicine.",
	"displayName": "Oriental Herb",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302116,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
