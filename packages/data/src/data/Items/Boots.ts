import Item from '../../types/Item';

export const Boots: Item = {
	"id": 204302,
	"name": "Boots",
	"buildsInto": [
		{
			"name": "Combat Boots",
			"id": 204404
		},
		{
			"name": "EOD Boots",
			"id": 204409
		}
	],
	"requirements": {
		"Running Shoes": 1,
		"Oil": 1,
		"Bandage": 1
	},
	"stats": {
		"attackSpeedRatio": 0.02,
		"hpRegen": 0.6,
		"moveSpeed": 0.22
	},
	"rarity": "Rare",
	"code": "부츠",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Protects your feet and calves. Don't wear them too tight -- it might restrict your bloodflow.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 204102
		},
		{
			"name": "Scissors",
			"id": 401202
		}
	],
	"displayName": "Boots",
	"apiMetaData": {
		"code": 204302,
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
