import Item from '../../types/Item';

export const SafetyHelmet: Item = {
	"id": 201205,
	"name": "SafetyHelmet",
	"buildsInto": [
		{
			"name": "Fire Helmet",
			"id": 201302
		}
	],
	"requirements": {
		"Bike Helmet": 1,
		"Stone": 1
	},
	"stats": {
		"maxHp": 210
	},
	"rarity": "Uncommon",
	"code": "안전모",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Please wear your personal protective equipment in all construction areas.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 201104
		},
		{
			"name": "Scissors",
			"id": 112101
		}
	],
	"displayName": "Safety Helmet",
	"apiMetaData": {
		"code": 201205,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
