import Item from '../../types/Item';

export const MithrilArmor: Item = {
	"id": 202407,
	"name": "MithrilArmor",
	"buildsInto": [],
	"requirements": {
		"Mithril": 1,
		"Fabric Armor": 1,
		"Leather": 1
	},
	"stats": {
		"attackSpeedRatio": 0.12,
		"defense": 65,
		"moveSpeed": 0.2
	},
	"rarity": "Epic",
	"code": "미스릴갑옷",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Normal chain armor cannot completely protect its wearer from external impact, but the Mithril material on this armor defies the normality of chain armor.",
	"buildsFrom": [
		{
			"name": "Mithril",
			"id": 401304
		},
		{
			"name": "Leather Armor",
			"id": 202201
		}
	],
	"displayName": "Mithril Armor",
	"apiMetaData": {
		"code": 202407,
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
