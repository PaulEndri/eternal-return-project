import Item from '../../types/Item';

export const HerbalMedicine: Item = {
	"id": "Herbal Medicine",
	"name": "Herbal Medicine",
	"href": "/Herbal_Medicine",
	"buildsFrom": [
		{
			"name": "Oriental Herb",
			"id": "Oriental Herb"
		},
		{
			"name": "Turtle Shell",
			"id": 401104
		}
	],
	"buildsInto": [
		{
			"name": "Zen Vitality",
			"id": "Zen Vitality"
		}
	],
	"requirements": {
		"Oriental Herb": 1,
		"Turtle Shell": 1
	},
	"stats": {
		"heal": 650
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
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
