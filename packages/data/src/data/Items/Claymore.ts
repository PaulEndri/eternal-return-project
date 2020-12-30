import Item from '../../types/Item';

export const Claymore: Item = {
	"id": "Claymore",
	"name": "Claymore",
	"href": "/Claymore",
	"buildsFrom": [
		{
			"name": "Mine",
			"id": "Mine"
		},
		{
			"name": "Explosive Trap",
			"id": "Explosive Trap"
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
		"attackPower": 8
	},
	"rarity": "Epic",
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
