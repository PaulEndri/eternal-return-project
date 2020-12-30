import Item from '../../types/Item';

export const ExplosiveTrap: Item = {
	"id": "Explosive Trap",
	"name": "Explosive Trap",
	"href": "/Explosive_Trap",
	"buildsFrom": [
		{
			"name": "Mousetrap",
			"id": 502103
		},
		{
			"name": "Gunpowder",
			"id": 401121
		}
	],
	"buildsInto": [
		{
			"name": "Fire Trap",
			"id": "Fire Trap"
		},
		{
			"name": "Claymore",
			"id": "Claymore"
		}
	],
	"requirements": {
		"Mousetrap": 1,
		"Gunpowder": 1
	},
	"stats": {
		"attackPower": 6
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
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
