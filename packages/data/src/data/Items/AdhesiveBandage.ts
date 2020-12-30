import Item from '../../types/Item';

export const AdhesiveBandage: Item = {
	"id": "Adhesive Bandage",
	"name": "Adhesive Bandage",
	"href": "/Adhesive_Bandage",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Disinfectant",
			"id": "Disinfectant"
		}
	],
	"requirements": {},
	"stats": {
		"heal": 200
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Hospital": 4
	},
	"foundQuantity": 1,
	"description": "Useful because it sticks to skin well and doesn't fall off easily. Just don't keep it on for too long.",
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
