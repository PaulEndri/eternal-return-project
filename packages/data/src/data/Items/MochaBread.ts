import Item from '../../types/Item';

export const MochaBread: Item = {
	"id": 302308,
	"name": "MochaBread",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Bread"
		},
		{
			"name": "Scissors",
			"id": "Coffee Liqueur"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Bread": 1,
		"Coffee": 1,
		"Alcohol": 1
	},
	"stats": {
		"heal": 700
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "Bread with a slight coffee flavor. Both the cream and raisin varieties are popular in Korea.",
	"displayName": "Mocha Bread",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302308,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
