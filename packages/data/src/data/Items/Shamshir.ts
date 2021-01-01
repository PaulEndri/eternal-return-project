import Item from '../../types/Item';

export const Shamshir: Item = {
	"id": 102201,
	"name": "Shamshir",
	"buildsFrom": [
		{
			"name": "Rusty Sword",
			"id": 102101
		},
		{
			"name": "Lighter",
			"id": 401107
		}
	],
	"buildsInto": [
		{
			"name": "Jewel Sword",
			"id": 102404
		},
		{
			"name": "Laevateinn",
			"id": 102409
		}
	],
	"requirements": {
		"Rusty Sword": 1,
		"Lighter": 1
	},
	"stats": {
		"attackPower": 27
	},
	"rarity": "Uncommon",
	"code": "샴쉬르",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The name translates into \"The Tail of the Lion.\" A symbolic sword of Persia, it's also known to be the origin of the sabre.",
	"displayName": "Shamshir",
	"apiMetaData": {
		"code": 102201,
		"category": "Weapon",
		"type": "TwoHandSword"
	},
	"clientMetaData": {
		"type": "Two-Handed Sword",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
