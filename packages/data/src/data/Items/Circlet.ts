import Item from '../../types/Item';

export const Circlet: Item = {
	"id": 201202,
	"name": "Circlet",
	"buildsInto": [
		{
			"name": "Tiara",
			"id": 201303
		},
		{
			"name": "Crown",
			"id": 201401
		},
		{
			"name": "Laurel Wreath",
			"id": 201408
		}
	],
	"requirements": {
		"Hairband": 1,
		"Branch": 1
	},
	"stats": {
		"defense": 14,
		"maxSp": 270
	},
	"rarity": "Uncommon",
	"code": "머리테",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A simple accessory worn on the head. It looks rather plain.",
	"buildsFrom": [
		{
			"name": "Hairband",
			"id": 201101
		},
		{
			"name": "Branch",
			"id": 108101
		}
	],
	"displayName": "Circlet",
	"apiMetaData": {
		"code": 201202,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
