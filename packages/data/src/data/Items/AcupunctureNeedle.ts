import Item from '../../types/Item';

export const AcupunctureNeedle: Item = {
	"id": 302217,
	"name": "AcupunctureNeedle",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Alcohol"
		},
		{
			"name": "Scissors",
			"id": "Needle"
		}
	],
	"buildsInto": [
		{
			"name": "Zen Vitality",
			"id": 302329
		}
	],
	"requirements": {
		"Alcohol": 1,
		"Needle": 1
	},
	"stats": {
		"heal": 800
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "It stings.. but only just a little.",
	"displayName": "Acupuncture Needle",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302217,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
