import Item from '../../types/Item';

export const Box: Item = {
	"id": 205107,
	"name": "Box",
	"buildsInto": [
		205303,
		205404,
		302312
	],
	"requirements": {},
	"stats": {
		"maxHp": 90
	},
	"rarity": "Common",
	"code": "상자",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Pond": 7,
		"Chapel": 6,
		"Dock": 7
	},
	"foundQuantity": 1,
	"description": "...It's an empty box.",
	"buildsFrom": [],
	"displayName": "Box",
	"apiMetaData": {
		"code": 205107,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [
		2
	],
	"airSupply": false,
	"collectible": 0
}
