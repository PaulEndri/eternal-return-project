import Item from '../../types/Item';

export const HighHeels: Item = {
	"id": 204203,
	"name": "HighHeels",
	"buildsInto": [
		204405
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
	"code": "하이힐",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Makes you a bit taller. Maybe the air is fresher up there.",
	"buildsFrom": [
		204101,
		401106
	],
	"displayName": "High Heels",
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
