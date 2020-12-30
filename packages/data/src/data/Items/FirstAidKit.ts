import Item from '../../types/Item';

export const FirstAidKit: Item = {
	"id": "First Aid Kit",
	"name": "First Aid Kit",
	"href": "/First_Aid_Kit",
	"buildsFrom": [
		{
			"name": "Disinfectant",
			"id": "Disinfectant"
		},
		{
			"name": "Bandage",
			"id": 203102
		}
	],
	"buildsInto": [],
	"requirements": {
		"Alcohol": 1,
		"Adhesive Bandage": 1,
		"Bandage": 1
	},
	"stats": {
		"heal": 950
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "The best bet for treating injuries. If you're in a hurt, this looks more like a treasure chest.",
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
