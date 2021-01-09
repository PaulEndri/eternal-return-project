import Item from '../../types/Item';

export const LacedQuiver: Item = {
	"id": 205304,
	"name": "LacedQuiver",
	"buildsInto": [],
	"requirements": {
		"Leather": 1,
		"Bamboo": 1,
		"Short Rod": 1,
		"Feather": 1
	},
	"stats": {
		"attackPower": 10,
		"attackSpeedRatio": 0.25,
		"moveSpeed": 0.1
	},
	"rarity": "Rare",
	"code": "궁기병의화살통",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Quiver",
			"id": 205208
		},
		{
			"name": "Feather Duster",
			"id": 205209
		}
	],
	"displayName": "Laced Quiver",
	"apiMetaData": {
		"code": 205304,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
