import Item from '../../types/Item';

export const CannedCodLiver: Item = {
	"id": "Canned Cod Liver",
	"name": "Canned Cod Liver",
	"href": "/Canned_Cod_Liver",
	"buildsFrom": [
		{
			"name": "Cod",
			"id": "Cod"
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
