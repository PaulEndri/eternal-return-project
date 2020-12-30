import Item from '../../types/Item';

export const ZenVitality: Item = {
	"id": "Zen Vitality",
	"name": "Zen Vitality",
	"href": "/Zen_Vitality",
	"buildsFrom": [
		{
			"name": "Acupuncture Needle",
			"id": "Acupuncture Needle"
		},
		{
			"name": "Herbal Medicine",
			"id": "Herbal Medicine"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Alcohol": 1,
		"Needle": 1,
		"Oriental Herb": 1,
		"Turtle Shell": 1
	},
	"stats": {
		"heal": 850
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
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
