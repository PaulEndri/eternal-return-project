import Item from '../../types/Item';

export const CombatBoots: Item = {
	"id": "Combat Boots",
	"name": "Combat Boots",
	"href": "/Combat_Boots",
	"buildsFrom": [
		{
			"name": "Boots",
			"id": 204302
		},
		{
			"name": "Leather",
			"id": 401103
		}
	],
	"buildsInto": [
		{
			"name": "Feather Boots",
			"id": 204402
		},
		{
			"name": "White Rhinos",
			"id": 204411
		}
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
