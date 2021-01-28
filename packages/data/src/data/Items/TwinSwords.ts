import Item from '../../types/Item';

export const TwinSwords: Item = {
	"id": 103201,
	"name": "TwinSwords",
	"buildsInto": [
		103301,
		103402,
		103501,
		103502
	],
	"requirements": {
		"Kitchen Knife": 1,
		"Rusty Sword": 1
	},
	"stats": {
		"attackPower": 18,
		"attackSpeedRatio": 0.1
	},
	"rarity": "Uncommon",
	"code": "쌍칼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Double the sword, double the offense!",
	"buildsFrom": [
		101104,
		102101
	],
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
