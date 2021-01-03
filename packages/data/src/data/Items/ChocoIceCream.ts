import Item from '../../types/Item';

export const ChocoIceCream: Item = {
	"id": 302237,
	"name": "ChocoIceCream",
	"buildsFrom": [
		{
			"name": "Ice",
			"id": 301103
		},
		{
			"name": "Chocolate",
			"id": 302119
		}
	],
	"buildsInto": [],
	"requirements": {
		"Ice": 1,
		"Chocolate": 1
	},
	"stats": {
		"heal": 550
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "",
	"displayName": "Choco Ice Cream",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302237,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
