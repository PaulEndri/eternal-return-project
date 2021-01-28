import Item from '../../types/Item';

export const ChocoPie: Item = {
	"id": 302216,
	"name": "ChocoPie",
	"buildsFrom": [
		302110,
		302119
	],
	"buildsInto": [
		302312
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
	"displayName": "Choco Pie",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302216,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
