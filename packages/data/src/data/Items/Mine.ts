import Item from '../../types/Item';

export const Mine: Item = {
	"id": 502304,
	"name": "Mine",
	"buildsFrom": [
		{
			"name": "Booby Trap",
			"id": 502205
		},
		{
			"name": "Gunpowder",
			"id": 401121
		}
	],
	"buildsInto": [
		{
			"name": "Claymore",
			"id": 502406
		}
	],
	"requirements": {
		"Snare": 1,
		"Glue": 1,
		"Gunpowder": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Mine",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502304,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
