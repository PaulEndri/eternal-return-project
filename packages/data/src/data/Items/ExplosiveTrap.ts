import Item from '../../types/Item';

export const ExplosiveTrap: Item = {
	"id": 502306,
	"name": "ExplosiveTrap",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Mousetrap"
		},
		{
			"name": "Scissors",
			"id": "Gunpowder"
		}
	],
	"buildsInto": [
		{
			"name": "Fire Trap",
			"id": 502403
		},
		{
			"name": "Claymore",
			"id": 502406
		}
	],
	"requirements": {
		"Mousetrap": 1,
		"Gunpowder": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"displayName": "Explosive Trap",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502306,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
