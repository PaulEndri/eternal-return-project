import Item from '../../types/Item';

export const FeatherDuster: Item = {
	"id": 205209,
	"name": "FeatherDuster",
	"buildsInto": [
		108402,
		116404,
		202413,
		205304
	],
	"requirements": {
		"Short Rod": 1,
		"Feather": 1
	},
	"stats": {
		"attackPower": 9,
		"moveSpeed": 0.1
	},
	"rarity": "Uncommon",
	"code": "먼지털이개",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Dust sticks to this thing like iron to a magnet. Feather dusters...how do they work?",
	"buildsFrom": [
		108102,
		205101
	],
	"displayName": "Feather Duster",
	"apiMetaData": {
		"code": 205209,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [
		5
	],
	"airSupply": true,
	"collectible": 0
}
