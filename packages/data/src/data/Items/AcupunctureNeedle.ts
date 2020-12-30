import Item from '../../types/Item';

export const AcupunctureNeedle: Item = {
	"id": "Acupuncture Needle",
	"name": "Acupuncture Needle",
	"href": "/Acupuncture_Needle",
	"buildsFrom": [
		{
			"name": "Alcohol",
			"id": 401111
		},
		{
			"name": "Needle",
			"id": 120101
		}
	],
	"buildsInto": [
		{
			"name": "Zen Vitality",
			"id": "Zen Vitality"
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
