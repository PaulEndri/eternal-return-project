import Item from '../../types/Item';

export const BikeHelmet: Item = {
	"id": 201104,
	"name": "Bike Helmet",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Safety Helmet",
			"id": 201205
		},
		{
			"name": "Ballistic Helmet",
			"id": 201301
		}
	],
	"requirements": {},
	"stats": {
		"maxHp": 90
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"School": 6,
		"Chapel": 6,
		"Beach": 6
	},
	"foundQuantity": 1,
	"description": "A shabby and cheap looking helmet for when you take your bike for a spin.",
	"apiMetaData": {
		"code": 201104,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [
		{
			"name": "Boar",
			"id": 3
		}
	],
	"airSupply": false,
	"collectible": 0
}
