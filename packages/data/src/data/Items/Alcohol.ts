import Item from '../../types/Item';

export const Alcohol: Item = {
	"id": 401111,
	"name": "Alcohol",
	"buildsInto": [
		113406,
		301204,
		301205,
		301208,
		302213,
		302217
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "알코올",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Hospital": 4,
		"School": 5,
		"Factory": 6
	},
	"foundQuantity": 1,
	"description": "Whenever you smell this, either a laboratory or a hospital might come to mind.",
	"buildsFrom": [],
	"displayName": "Alcohol",
	"apiMetaData": {
		"code": 401111,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		3
	],
	"airSupply": false,
	"collectible": 0
}
