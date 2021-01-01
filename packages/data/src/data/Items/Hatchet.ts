import Item from '../../types/Item';

export const Hatchet: Item = {
	"id": 105103,
	"name": "Hatchet",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Battle Axe",
			"id": 105202
		},
		{
			"name": "Halberd Axe",
			"id": 107303
		},
		{
			"name": "Pendulum Axe",
			"id": 502305
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 25
	},
	"rarity": "Common",
	"code": "손도끼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Pond": 4,
		"Factory": 4,
		"Beach": 5
	},
	"foundQuantity": 1,
	"description": "It looks heavy, so attack with it by slicing downward.",
	"displayName": "Hatchet",
	"apiMetaData": {
		"code": 105103,
		"category": "Weapon",
		"type": "Axe"
	},
	"clientMetaData": {
		"type": "Axe",
		"category": "Weapon"
	},
	"droppedFrom": [
		{
			"name": "WildDog",
			"id": 4
		}
	],
	"airSupply": false,
	"collectible": 0
}
