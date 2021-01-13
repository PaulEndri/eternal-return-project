import Item from '../../types/Item';

export const StarsteelTwinSwords: Item = {
	"id": 103402,
	"name": "StarsteelTwinSwords",
	"buildsInto": [],
	"requirements": {
		"Kitchen Knife": 1,
		"Rusty Sword": 1,
		"Meteorite": 1,
		"Stone": 1
	},
	"stats": {
		"attackPower": 55,
		"attackSpeedRatio": 0.5
	},
	"rarity": "Epic",
	"code": "자웅일대검",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A pair of swords that Liu Bei used in \"Romance of the Three Kingdoms\".",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 103201
		},
		{
			"name": "Scissors",
			"id": 401301
		}
	],
	"displayName": "Starsteel Twin Swords",
	"apiMetaData": {
		"code": 103402,
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
