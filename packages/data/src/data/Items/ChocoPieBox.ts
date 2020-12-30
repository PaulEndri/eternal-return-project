import Item from '../../types/Item';

export const ChocoPieBox: Item = {
	"id": "Choco Pie Box",
	"name": "Choco Pie Box",
	"href": "/Choco_Pie_Box",
	"buildsFrom": [
		{
			"name": "Choco Pie",
			"id": "Choco Pie"
		},
		{
			"name": "Box",
			"id": 205107
		}
	],
	"buildsInto": [],
	"requirements": {
		"Bread": 1,
		"Chocolate": 1,
		"Box": 1
	},
	"stats": {
		"heal": 733
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "A box of choco pies are like a first-aid kit for your soul.",
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
