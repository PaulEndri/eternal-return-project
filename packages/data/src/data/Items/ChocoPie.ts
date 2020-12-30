import Item from '../../types/Item';

export const ChocoPie: Item = {
	"id": "Choco Pie",
	"name": "Choco Pie",
	"href": "/Choco_Pie",
	"buildsFrom": [
		{
			"name": "Bread",
			"id": "Bread"
		},
		{
			"name": "Chocolate",
			"id": "Chocolate"
		}
	],
	"buildsInto": [
		{
			"name": "Choco Pie Box",
			"id": "Choco Pie Box"
		}
	],
	"requirements": {
		"Bread": 1,
		"Chocolate": 1
	},
	"stats": {
		"heal": 600
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "Delicious frozen or in the microwave.  You can even just eat the marshmallow in between",
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
