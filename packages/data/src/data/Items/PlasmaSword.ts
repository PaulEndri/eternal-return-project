import Item from '../../types/Item';

export const PlasmaSword: Item = {
	"id": 102408,
	"name": "PlasmaSword",
	"buildsInto": [],
	"requirements": {
		"Rusty Sword": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Laster Pointer": 1
	},
	"stats": {
		"attackPower": 75,
		"sightRange": 3
	},
	"rarity": "Rare",
	"code": "플라즈마소드",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A sword made from the combination of ion nuclei and free electrons kept at an ultra-high temperature, also known as plasma. Due to its explosive nature, it's hard to handle, but it could be the start of an era of future weaponry. The plasma sword is the first of its kind.",
	"buildsFrom": [
		{
			"name": "Bastard Sword",
			"id": 102403
		},
		{
			"name": "Laster Pointer",
			"id": 401108
		}
	],
	"displayName": "Plasma Sword",
	"apiMetaData": {
		"code": 102408,
		"category": "Weapon",
		"type": "TwoHandSword"
	},
	"clientMetaData": {
		"type": "Two-Handed Sword",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
