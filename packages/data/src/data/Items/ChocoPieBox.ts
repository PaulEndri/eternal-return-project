import Item from '../../types/Item';

export const ChocoPieBox: Item = {
	"id": 302312,
	"name": "ChocoPieBox",
	"buildsFrom": [
		{
			"name": "Choco Pie",
			"id": 302216
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
	"displayName": "Choco Pie Box",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302312,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
