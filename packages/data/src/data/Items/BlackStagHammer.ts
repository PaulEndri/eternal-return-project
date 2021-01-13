import Item from '../../types/Item';

export const BlackStagHammer: Item = {
	"id": 104302,
	"name": "BlackStagHammer",
	"buildsInto": [
		{
			"name": "Hammer of Dagda",
			"id": 104402
		},
		{
			"name": "Hammer of Thor",
			"id": 104403
		}
	],
	"requirements": {
		"Hammer": 1,
		"Short Rod": 1,
		"Leather": 1
	},
	"stats": {
		"attackPower": 56
	},
	"rarity": "Rare",
	"code": "사슴망치",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 104201
		},
		{
			"name": "Scissors",
			"id": 401103
		}
	],
	"displayName": "Black Stag Hammer",
	"apiMetaData": {
		"code": 104302,
		"category": "Weapon",
		"type": "Hammer"
	},
	"clientMetaData": {
		"type": "Hammer",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
