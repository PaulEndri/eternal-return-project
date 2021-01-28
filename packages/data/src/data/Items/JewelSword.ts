import Item from '../../types/Item';

export const JewelSword: Item = {
	"id": 102404,
	"name": "JewelSword",
	"buildsInto": [
		102407,
		102411
	],
	"requirements": {
		"Rusty Sword": 1,
		"Lighter": 1,
		"Hammer": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 35,
		"maxHp": 200
	},
	"rarity": "Rare",
	"code": "보검",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Valuable by its very existence. Often is the case of such swords that were made with precious materials or used by a famous hero.",
	"buildsFrom": [
		102201,
		401204
	],
	"displayName": "Jewel Sword",
	"apiMetaData": {
		"code": 102404,
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
