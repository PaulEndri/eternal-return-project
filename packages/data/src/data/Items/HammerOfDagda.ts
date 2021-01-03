import Item from '../../types/Item';

export const HammerOfDagda: Item = {
	"id": 104402,
	"name": "HammerOfDagda",
	"buildsFrom": [
		{
			"name": "Black Stag Hammer",
			"id": 104302
		},
		{
			"name": "Saint's Relic",
			"id": 205202
		}
	],
	"buildsInto": [],
	"requirements": {
		"Hammer": 1,
		"Short Rod": 1,
		"Leather": 1,
		"Cross": 1,
		"Holy Grail": 1
	},
	"stats": {
		"attackPower": 95,
		"hpRegenRatio": 2.5
	},
	"rarity": "Epic",
	"code": "다그다의망치",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Hammer of Dagda",
	"apiMetaData": {
		"code": 104402,
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
