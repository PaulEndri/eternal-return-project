import Item from '../../types/Item';

export const BastardSword: Item = {
	"id": 102403,
	"name": "Bastard Sword",
	"buildsFrom": [
		{
			"name": "Rusty Sword",
			"id": 102101
		},
		{
			"name": "Steel",
			"id": 401201
		}
	],
	"buildsInto": [
		{
			"name": "Thuận Thiên",
			"id": "Thuận Thiên"
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "In the Middle Ages, the Bastard Sword was the only weapon with the characteristics of both a double-handed sword and a single-handed sword, so it was named Bastard, meaning mixed breed.",
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
