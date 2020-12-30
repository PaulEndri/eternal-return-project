import Item from '../../types/Item';

export const KillerHeels: Item = {
	"id": 204403,
	"name": "Killer Heels",
	"buildsFrom": [
		{
			"name": "High Heels",
			"id": 204203
		},
		{
			"name": "Glass Pieces",
			"id": 205204
		}
	],
	"buildsInto": [
		{
			"name": "Bucephalus",
			"id": 204408
		},
		{
			"name": "Red Shoes",
			"id": 204502
		}
	],
	"requirements": {
		"Slippers": 1,
		"Scrap Metal": 1,
		"Glass Bottle": 1,
		"Stone": 1
	},
	"stats": {
		"attackPower": 5,
		"criticalStrikeChance": 0.1,
		"moveSpeed": 0.16,
		"spRegen": 0.8
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Heels sharp enough to be used as weapons themselves.",
	"apiMetaData": {
		"code": 204403,
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
