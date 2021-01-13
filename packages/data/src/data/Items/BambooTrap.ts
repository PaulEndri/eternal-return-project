import Item from '../../types/Item';

export const BambooTrap: Item = {
	"id": 502204,
	"name": "BambooTrap",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Snare"
		},
		{
			"name": "Scissors",
			"id": "Bamboo"
		}
	],
	"buildsInto": [
		{
			"name": "Pendulum Axe",
			"id": 502305
		}
	],
	"requirements": {
		"Snare": 1,
		"Bamboo": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Bamboo Trap",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502204,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
