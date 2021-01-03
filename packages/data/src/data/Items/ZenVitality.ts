import Item from '../../types/Item';

export const ZenVitality: Item = {
	"id": 302329,
	"name": "ZenVitality",
	"buildsFrom": [
		{
			"name": "Acupuncture Needle",
			"id": 302217
		},
		{
			"name": "Herbal Medicine",
			"id": 302207
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
	"displayName": "Zen Vitality",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302329,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
