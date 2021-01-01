import Item from '../../types/Item';

export const StrongBow: Item = {
	"id": 114301,
	"name": "StrongBow",
	"buildsFrom": [
		{
			"name": "Wooden Bow",
			"id": 114201
		},
		{
			"name": "Oil",
			"id": 401112
		}
	],
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
