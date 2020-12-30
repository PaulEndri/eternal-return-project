import Item from '../../types/Item';

export const Stone: Item = {
	"id": 112101,
	"name": "Stone",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Satisfaction",
			"id": 121404
		},
		{
			"name": "Safety Helmet",
			"id": 201205
		},
		{
			"name": "Glass Pieces",
			"id": 205204
		},
		{
			"name": "Powder of Life",
			"id": 205301
		},
		{
			"name": "White Powder",
			"id": 401206
		},
		{
			"name": "Heated Stone",
			"id": 401215
		},
		{
			"name": "Moonstone",
			"id": 401301
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 2,
	"description": "A stone that can be thrown or be used to make something.",
	"apiMetaData": {
		"code": 112101,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 3
}
