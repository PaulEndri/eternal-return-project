import Item from '../../types/Item';

export const PendulumAxe: Item = {
	"id": 502305,
	"name": "PendulumAxe",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Bamboo Trap"
		},
		{
			"name": "Scissors",
			"id": "Hatchet"
		}
	],
	"buildsInto": [
		{
			"name": "Double Guillotine",
			"id": 502405
		}
	],
	"requirements": {
		"Snare": 1,
		"Bamboo": 1,
		"Hatchet": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Pendulum Axe",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502305,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
