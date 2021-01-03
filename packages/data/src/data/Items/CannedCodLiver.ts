import Item from '../../types/Item';

export const CannedCodLiver: Item = {
	"id": 302204,
	"name": "CannedCodLiver",
	"buildsFrom": [
		{
			"name": "Cod",
			"id": 302104
		},
		{
			"name": "Can",
			"id": 401120
		}
	],
	"buildsInto": [],
	"requirements": {
		"Cod": 1,
		"Can": 1
	},
	"stats": {
		"heal": 650
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Canned Cod Liver",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302204,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
