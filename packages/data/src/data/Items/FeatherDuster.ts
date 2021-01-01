import Item from '../../types/Item';

export const FeatherDuster: Item = {
	"id": 205209,
	"name": "FeatherDuster",
	"buildsFrom": [
		{
			"name": "Short Rod",
			"id": 108102
		},
		{
			"name": "Feather",
			"id": 205101
		}
	],
	"buildsInto": [
		{
			"name": "Torch",
			"id": 108402
		},
		{
			"name": "Elegance",
			"id": 116404
		},
		{
			"name": "Butler's Suit",
			"id": 202413
		},
		{
			"name": "Laced Quiver",
			"id": 205304
		}
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
		{
			"name": "Wolf",
			"id": 5
		}
	],
	"airSupply": true,
	"collectible": 0
}