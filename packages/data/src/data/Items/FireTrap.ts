import Item from '../../types/Item';

export const FireTrap: Item = {
	"id": 502403,
	"name": "FireTrap",
	"buildsFrom": [
		{
			"name": "Explosive Trap",
			"id": 502306
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
		"attackPower": "#REF!"
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"displayName": "Fire Trap",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502403,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
