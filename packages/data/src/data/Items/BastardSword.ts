import Item from '../../types/Item';

export const BastardSword: Item = {
	"id": 102403,
	"name": "BastardSword",
	"buildsInto": [
		{
			"name": "Thuận Thiên",
			"id": 102405
		},
		{
			"name": "Plasma Sword",
			"id": 102408
		}
	],
	"requirements": {
		"Rusty Sword": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": 45,
		"moveSpeed": -0.1
	},
	"rarity": "Rare",
	"code": "바스타드소드",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "In the Middle Ages, the Bastard Sword was the only weapon with the characteristics of both a double-handed sword and a single-handed sword, so it was named Bastard, meaning mixed breed.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 102101
		},
		{
			"name": "Scissors",
			"id": 401201
		}
	],
	"displayName": "Bastard Sword",
	"apiMetaData": {
		"code": 102403,
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
