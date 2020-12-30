import Item from '../../types/Item';

export const ChocoIceCream: Item = {
	"id": "Choco Ice Cream",
	"name": "Choco Ice Cream",
	"href": "/Choco_Ice_Cream",
	"buildsFrom": [
		{
			"name": "Ice",
			"id": 301103
		},
		{
			"name": "Chocolate",
			"id": "Chocolate"
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
