import Item from '../../types/Item';

export const Hat: Item = {
	"id": 201102,
	"name": "Hat",
	"buildsInto": [
		201203,
		201204
	],
	"requirements": {},
	"stats": {
		"cooldownReduction": 0.02,
		"defense": 4,
		"lifeSteal": 0.05
	},
	"rarity": "Common",
	"code": "모자",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Pond": 7,
		"Archery Range": 5,
		"School": 6
	},
	"foundQuantity": 1,
	"description": "Nothing beats than a simple cap when it's sunny, raining, or snowing.",
	"buildsFrom": [],
	"displayName": "Hat",
	"apiMetaData": {
		"code": 201102,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [
		2
	],
	"airSupply": false,
	"collectible": 0
}
