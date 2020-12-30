import Item from '../../types/Item';

export const FireTrap: Item = {
	"id": "Fire Trap",
	"name": "Fire Trap",
	"href": "/Fire_Trap",
	"buildsFrom": [
		{
			"name": "Explosive Trap",
			"id": "Explosive Trap"
		},
		{
			"name": "Oilcloth",
			"id": 401202
		}
	],
	"buildsInto": [],
	"requirements": {
		"Mousetrap": 1,
		"Gunpowder": 1,
		"Oil": 1,
		"Bandage": 1
	},
	"stats": {
		"attackPower": 8
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
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
