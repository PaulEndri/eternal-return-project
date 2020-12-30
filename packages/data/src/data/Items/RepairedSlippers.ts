import Item from '../../types/Item';

export const RepairedSlippers: Item = {
	"id": 204301,
	"name": "Repaired Slippers",
	"buildsFrom": [
		{
			"name": "Slippers",
			"id": 204101
		},
		{
			"name": "Cloth",
			"id": 401113
		}
	],
	"buildsInto": [
		{
			"name": "Straitjacket Sneakers",
			"id": 204406
		},
		{
			"name": "Glacial Shoes",
			"id": 204410
		}
	],
	"requirements": {
		"Slippers": 1,
		"Cloth": 1
	},
	"stats": {
		"moveSpeed": 0.16,
		"spRegen": 0.5,
		"spRegenRatio": 0.3
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 204301,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
