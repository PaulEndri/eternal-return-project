import Item from '../../types/Item';

export const SafetyHelmet: Item = {
	"id": 201205,
	"name": "Safety Helmet",
	"buildsFrom": [
		{
			"name": "Bike Helmet",
			"id": 201104
		},
		{
			"name": "Stone",
			"id": 112101
		}
	],
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Please wear your personal protective equipment in all construction areas.",
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
