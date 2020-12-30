import Item from '../../types/Item';

export const HighHeels: Item = {
	"id": 204203,
	"name": "High Heels",
	"buildsFrom": [
		{
			"name": "Slippers",
			"id": 204101
		},
		{
			"name": "Scrap Metal",
			"id": 401106
		}
	],
	"buildsInto": [
		{
			"name": "Killer Heels",
			"id": 204403
		}
	],
	"requirements": {
		"Slippers": 1,
		"Scrap Metal": 1
	},
	"stats": {
		"moveSpeed": 0.17,
		"spRegen": 0.8
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Makes you a bit taller. Maybe the air is fresher up there.",
	"apiMetaData": {
		"code": 204203,
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
