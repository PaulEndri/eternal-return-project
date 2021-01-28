import Item from '../../types/Item';

export const ScrapMetal: Item = {
	"id": 401106,
	"name": "ScrapMetal",
	"buildsInto": [
		119201,
		204203,
		401201,
		401213,
		401303,
		502307
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "고철",
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
	"buildsFrom": [],
	"displayName": "Scrap Metal",
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
		2,
		4
	],
	"airSupply": false,
	"collectible": 0
}
