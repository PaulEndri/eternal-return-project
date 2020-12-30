import Item from '../../types/Item';

export const MochaBread: Item = {
	"id": "Mocha Bread",
	"name": "Mocha Bread",
	"href": "/Mocha_Bread",
	"buildsFrom": [
		{
			"name": "Bread",
			"id": "Bread"
		},
		{
			"name": "Coffee Liqueur",
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
