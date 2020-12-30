import Item from '../../types/Item';

export const OrientalHerb: Item = {
	"id": "Oriental Herb",
	"name": "Oriental Herb",
	"href": "/Oriental_Herb",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Herbal Liquor",
			"id": "Herbal Liquor"
		},
		{
			"name": "Herbal Medicine",
			"id": "Herbal Medicine"
		},
		{
			"name": "Orchid",
			"id": "Orchid"
		},
		{
			"name": "Oriental Concoction",
			"id": "Oriental Concoction"
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
