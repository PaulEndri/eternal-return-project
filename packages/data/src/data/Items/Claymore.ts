import Item from '../../types/Item';

export const Claymore: Item = {
	"id": 502406,
	"name": "Claymore",
	"buildsFrom": [
		{
			"name": "Mine",
			"id": 502304
		},
		{
			"name": "Explosive Trap",
			"id": 502306
		}
	],
	"buildsInto": [],
	"requirements": {
		"Snare": 1,
		"Glue": 1,
		"Gunpowder": 2,
		"Mousetrap": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Epic",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Claymore",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502406,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}