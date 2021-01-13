import Item from '../../types/Item';

export const StrongBow: Item = {
	"id": 114301,
	"name": "StrongBow",
	"buildsInto": [
		{
			"name": "Twinbow",
			"id": 114405
		},
		{
			"name": "Failnaught",
			"id": 114502
		}
	],
	"requirements": {
		"Branch": 1,
		"Piano Wire": 1,
		"Oil": 1
	},
	"stats": {
		"attackPower": 26,
		"attackSpeedRatio": 0.15
	},
	"rarity": "Rare",
	"code": "강궁",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A bow with strong elasticity, the bow string is made of 240 strands of three-ply thread.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 114201
		},
		{
			"name": "Scissors",
			"id": 401112
		}
	],
	"displayName": "Strong Bow",
	"apiMetaData": {
		"code": 114301,
		"category": "Weapon",
		"type": "Bow"
	},
	"clientMetaData": {
		"type": "Bow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
