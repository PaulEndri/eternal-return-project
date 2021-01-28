import Item from '../../types/Item';

export const OrientalHerb: Item = {
	"id": 302116,
	"name": "OrientalHerb",
	"buildsFrom": [],
	"buildsInto": [
		301305,
		302207,
		302218,
		302314
	],
	"requirements": {},
	"stats": {
		"heal": 200
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Temple": 6,
		"Pond": 7,
		"Forest": 6
	},
	"foundQuantity": 1,
	"description": "An herb used in traditional medicine.",
	"displayName": "Oriental Herb",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302116,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
