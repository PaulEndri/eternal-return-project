import Item from '../../types/Item';

export const DoubleGuillotine: Item = {
	"id": 502405,
	"name": "DoubleGuillotine",
	"buildsFrom": [
		{
			"name": "Jungle Guillotine",
			"id": 502303
		},
		{
			"name": "Pendulum Axe",
			"id": 502305
		}
	],
	"buildsInto": [],
	"requirements": {
		"Mousetrap": 1,
		"Kitchen Knife": 1,
		"Snare": 1,
		"Bamboo": 1,
		"Hatchet": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Epic",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Double Guillotine",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502405,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
