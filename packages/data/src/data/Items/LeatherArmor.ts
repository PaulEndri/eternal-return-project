import Item from '../../types/Item';

export const LeatherArmor: Item = {
	"id": 202201,
	"name": "LeatherArmor",
	"buildsInto": [
		{
			"name": "Chain Armor",
			"id": 202302
		},
		{
			"name": "Sunset Armor",
			"id": 202402
		},
		{
			"name": "Mithril Armor",
			"id": 202407
		}
	],
	"requirements": {
		"Fabric Armor": 1,
		"Leather": 1
	},
	"stats": {
		"defense": 22
	},
	"rarity": "Uncommon",
	"code": "가죽갑옷",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Armor made from leather. Stronger than armor made from just fabric!",
	"buildsFrom": [
		{
			"name": "Fabric Armor",
			"id": 202106
		},
		{
			"name": "Leather",
			"id": 401103
		}
	],
	"displayName": "Leather Armor",
	"apiMetaData": {
		"code": 202201,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
