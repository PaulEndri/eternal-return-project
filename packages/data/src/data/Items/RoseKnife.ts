import Item from '../../types/Item';

export const RoseKnife: Item = {
	"id": 101301,
	"name": "RoseKnife",
	"buildsFrom": [
		{
			"name": "Army Knife",
			"id": 101201
		},
		{
			"name": "Flower",
			"id": 205102
		}
	],
	"buildsInto": [
		{
			"name": "Carnwennan",
			"id": 101401
		},
		{
			"name": "Mount Slicer",
			"id": 101402
		}
	],
	"requirements": {
		"Kitchen Knife": 1,
		"Branch": 1,
		"Flower": 1
	},
	"stats": {
		"attackPower": 20,
		"cooldownReduction": 0.1,
		"moveSpeed": 0.1,
		"moveSpeedOutOfCombat": 0.1
	},
	"rarity": "Rare",
	"code": "장미칼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Rose Knife",
	"apiMetaData": {
		"code": 101301,
		"category": "Weapon",
		"type": "OneHandSword"
	},
	"clientMetaData": {
		"type": "Dagger",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
