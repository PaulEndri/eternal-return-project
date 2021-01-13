import Item from '../../types/Item';

export const HoneyCodSteak: Item = {
	"id": 302201,
	"name": "HoneyCodSteak",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Cod"
		},
		{
			"name": "Scissors",
			"id": "Honey"
		}
	],
	"buildsInto": [
		{
			"name": "Gleipnir",
			"id": 109403
		}
	],
	"requirements": {
		"Cod": 1,
		"Honey": 1
	},
	"stats": {
		"heal": 700
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"displayName": "Honey cod steak",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302201,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
