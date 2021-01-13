import Item from '../../types/Item';

export const Bucephalus: Item = {
	"id": 204408,
	"name": "Bucephalus",
	"buildsInto": [],
	"requirements": {
		"Slippers": 1,
		"Scrap Metal": 1,
		"Glass Bottle": 1,
		"Stone": 1,
		"Tights": 1,
		"Steel Chain": 1
	},
	"stats": {
		"attackPower": 5,
		"criticalStrikeChance": 0.17,
		"defense": 5,
		"moveSpeed": 0.33,
		"spRegen": 1
	},
	"rarity": "Epic",
	"code": "부케팔로스",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 204405
		},
		{
			"name": "Scissors",
			"id": 204202
		}
	],
	"displayName": "Bucephalus",
	"apiMetaData": {
		"code": 204408,
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
