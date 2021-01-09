import Item from '../../types/Item';

export const Doll: Item = {
	"id": 205205,
	"name": "Doll",
	"buildsInto": [
		{
			"name": "Statue of Soteria",
			"id": 108403
		},
		{
			"name": "One Inch Punch",
			"id": 110405
		},
		{
			"name": "Uchiwa",
			"id": 205302
		}
	],
	"requirements": {
		"Ribbon": 1,
		"Cloth": 1
	},
	"stats": {
		"lifeSteal": 0.11,
		"spRegenRatio": 1
	},
	"rarity": "Uncommon",
	"code": "인형",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Aren't you a little old to be playing with dolls?",
	"buildsFrom": [
		{
			"name": "Ribbon",
			"id": 205103
		},
		{
			"name": "Cloth",
			"id": 401113
		}
	],
	"displayName": "Doll",
	"apiMetaData": {
		"code": 205205,
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
