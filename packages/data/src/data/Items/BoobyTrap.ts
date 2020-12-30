import Item from '../../types/Item';

export const BoobyTrap: Item = {
	"id": "Booby Trap",
	"name": "Booby Trap",
	"href": "/Booby_Trap",
	"buildsFrom": [
		{
			"name": "Snare",
			"id": "Snare"
		},
		{
			"name": "Glue",
			"id": 401116
		}
	],
	"buildsInto": [
		{
			"name": "Mine",
			"id": "Mine"
		}
	],
	"requirements": {
		"Snare": 1,
		"Glue": 1
	},
	"stats": {
		"attackPower": 6
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
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
