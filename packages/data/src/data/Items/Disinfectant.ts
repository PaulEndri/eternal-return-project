import Item from '../../types/Item';

export const Disinfectant: Item = {
	"id": "Disinfectant",
	"name": "Disinfectant",
	"href": "/Disinfectant",
	"buildsFrom": [
		{
			"name": "Alcohol",
			"id": 401111
		},
		{
			"name": "Adhesive Bandage",
			"id": "Adhesive Bandage"
		}
	],
	"buildsInto": [
		{
			"name": "First Aid Kit",
			"id": "First Aid Kit"
		}
	],
	"requirements": {
		"Alcohol": 1,
		"Adhesive Bandage": 1
	},
	"stats": {
		"heal": 600
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
