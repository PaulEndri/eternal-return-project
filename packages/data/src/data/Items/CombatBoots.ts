import Item from '../../types/Item';

export const CombatBoots: Item = {
	"id": 204405,
	"name": "CombatBoots",
	"buildsInto": [
		204408,
		204502
	],
	"requirements": {
		"Running Shoes": 1,
		"Oil": 1,
		"Bandage": 1,
		"Leather": 1
	},
	"stats": {
		"attackSpeedRatio": 0.07,
		"hpRegen": 0.6,
		"moveSpeed": 0.27
	},
	"rarity": "Rare",
	"code": "킬힐",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		204203,
		205204
	],
	"displayName": "Combat Boots",
	"apiMetaData": {
		"code": 204405,
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
