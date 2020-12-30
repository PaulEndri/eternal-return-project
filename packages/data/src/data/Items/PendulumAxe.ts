import Item from '../../types/Item';

export const PendulumAxe: Item = {
	"id": "Pendulum Axe",
	"name": "Pendulum Axe",
	"href": "/Pendulum_Axe",
	"buildsFrom": [
		{
			"name": "Bamboo Trap",
			"id": "Bamboo Trap"
		},
		{
			"name": "Hatchet",
			"id": 105103
		}
	],
	"buildsInto": [
		{
			"name": "Double Guillotine",
			"id": "Double Guillotine"
		}
	],
	"requirements": {
		"Snare": 1,
		"Bamboo": 1,
		"Hatchet": 1
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
