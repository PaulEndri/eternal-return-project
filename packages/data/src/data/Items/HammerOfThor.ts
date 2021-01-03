import Item from '../../types/Item';

export const HammerOfThor: Item = {
	"id": 104403,
	"name": "HammerOfThor",
	"buildsFrom": [
		{
			"name": "Black Stag Hammer",
			"id": 104302
		},
		{
			"name": "Ion Battery",
			"id": 401306
		}
	],
	"buildsInto": [],
	"requirements": {
		"Hammer": 1,
		"Short Rod": 1,
		"Leather": 1,
		"Battery": 1,
		"Water": 1,
		"Carbonated Water": 1
	},
	"stats": {
		"attackPower": 120,
		"attackSpeedRatio": 0.4
	},
	"rarity": "Epic",
	"code": "토르의망치",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The hammer that Thor, the God of Thunder, used. Also called Mjolnir, meaning \"The Destroyer.\"",
	"displayName": "Hammer of Thor",
	"apiMetaData": {
		"code": 104403,
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
