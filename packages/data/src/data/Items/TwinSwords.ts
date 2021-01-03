import Item from '../../types/Item';

export const TwinSwords: Item = {
	"id": 103201,
	"name": "TwinSwords",
	"buildsFrom": [
		{
			"name": "Kitchen Knife",
			"id": 101104
		},
		{
			"name": "Rusty Sword",
			"id": 102101
		}
	],
	"buildsInto": [
		{
			"name": "Florentine",
			"id": 103301
		},
		{
			"name": "Starsteel Twin Swords",
			"id": 103402
		},
		{
			"name": "Dioscuri",
			"id": 103501
		},
		{
			"name": "Lloigor & Zahr",
			"id": 103502
		}
	],
	"requirements": {
		"Kitchen Knife": 1,
		"Rusty Sword": 1
	},
	"stats": {
		"attackPower": 14,
		"attackSpeedRatio": 0.1
	},
	"rarity": "Uncommon",
	"code": "쌍칼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Double the sword, double the offense!",
	"displayName": "Twin Swords",
	"apiMetaData": {
		"code": 103201,
		"category": "Weapon",
		"type": "DualSword"
	},
	"clientMetaData": {
		"type": "Dual Swords",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
