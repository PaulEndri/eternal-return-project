import Item from '../../types/Item';

export const FeatherBoots: Item = {
	"id": 204402,
	"name": "FeatherBoots",
	"buildsInto": [],
	"requirements": {
		"Running Shoes": 1,
		"Oil": 1,
		"Bandage": 1,
		"Leather": 1,
		"Feather": 1
	},
	"stats": {
		"attackSpeedRatio": 0.3,
		"hpRegen": 1,
		"moveSpeed": 0.4
	},
	"rarity": "Epic",
	"code": "경량화부츠",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "They feel as light as a feather! Maybe because that's what they're made of!",
	"buildsFrom": [
		{
			"name": "Combat Boots",
			"id": 204404
		},
		{
			"name": "Feather",
			"id": 205101
		}
	],
	"displayName": "Feather Boots",
	"apiMetaData": {
		"code": 204402,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
