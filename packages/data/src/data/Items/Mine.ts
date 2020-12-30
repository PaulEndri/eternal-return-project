import Item from '../../types/Item';

export const Mine: Item = {
	"id": "Mine",
	"name": "Mine",
	"href": "/Mine",
	"buildsFrom": [
		{
			"name": "Booby Trap",
			"id": "Booby Trap"
		},
		{
			"name": "Gunpowder",
			"id": 401121
		}
	],
	"buildsInto": [
		{
			"name": "Claymore",
			"id": "Claymore"
		}
	],
	"requirements": {
		"Snare": 1,
		"Glue": 1,
		"Gunpowder": 1
	},
	"stats": {
		"attackPower": 8
	},
	"rarity": "Rare",
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
