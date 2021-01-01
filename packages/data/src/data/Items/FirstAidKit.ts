import Item from '../../types/Item';

export const FirstAidKit: Item = {
	"id": 302324,
	"name": "FirstAidKit",
	"buildsFrom": [
		{
			"name": "Disinfectant",
			"id": 302213
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
	"displayName": "First Aid Kit",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302324,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
