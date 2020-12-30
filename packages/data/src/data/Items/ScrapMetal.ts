import Item from '../../types/Item';

export const ScrapMetal: Item = {
	"id": 401106,
	"name": "Scrap Metal",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Nunchaku",
			"id": "Nunchaku"
		},
		{
			"name": "High Heels",
			"id": 204203
		},
		{
			"name": "Steel",
			"id": 401201
		},
		{
			"name": "Iron Sheet",
			"id": 401213
		},
		{
			"name": "Motor",
			"id": 401303
		},
		{
			"name": "RDX",
			"id": 502307
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Hospital": 6,
		"Factory": 9,
		"Hotel": 8,
		"Dock": 8
	},
	"foundQuantity": 1,
	"description": "Very old, beat up metal. Can you craft a weapon out of this?",
	"apiMetaData": {
		"code": 401106,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		{
			"name": "Bat",
			"id": 2
		},
		{
			"name": "WildDog",
			"id": 4
		}
	],
	"airSupply": false,
	"collectible": 0
}
