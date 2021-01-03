import Item from '../../types/Item';

export const HerbalMedicine: Item = {
	"id": 302207,
	"name": "HerbalMedicine",
	"buildsFrom": [
		{
			"name": "Oriental Herb",
			"id": 302116
		},
		{
			"name": "Turtle Shell",
			"id": 401104
		}
	],
	"buildsInto": [
		{
			"name": "Zen Vitality",
			"id": 302329
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
	"displayName": "Herbal Medicine",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302207,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
