import Item from '../../types/Item';

export const Oilcloth: Item = {
	"id": 401202,
	"name": "Oilcloth",
	"buildsInto": [
		108402,
		110410,
		115402,
		204302,
		115402,
		502403
	],
	"requirements": {
		"Oil": 1,
		"Bandage": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "기름먹인천",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 2,
	"description": "Oiled cloth. May be needed for something involving fire.",
	"buildsFrom": [
		401112,
		203102
	],
	"displayName": "Oilcloth",
	"apiMetaData": {
		"code": 401202,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		5,
		6
	],
	"airSupply": true,
	"collectible": 0
}
