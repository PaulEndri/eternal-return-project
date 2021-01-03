import Item from '../../types/Item';

export const StarsteelTwinSwords: Item = {
	"id": 103402,
	"name": "StarsteelTwinSwords",
	"buildsFrom": [
		{
			"name": "Twin Swords",
			"id": 103201
		},
		{
			"name": "Moonstone",
			"id": 401301
		}
	],
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
