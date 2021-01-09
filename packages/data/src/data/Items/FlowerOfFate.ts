import Item from '../../types/Item';

export const FlowerOfFate: Item = {
	"id": 205203,
	"name": "FlowerOfFate",
	"buildsInto": [
		{
			"name": "Apricot Sword",
			"id": 120301
		},
		{
			"name": "Emerald Tablet",
			"id": 205501
		}
	],
	"requirements": {
		"Flower": 1,
		"Playing Cards": 1
	},
	"stats": {
		"cooldownReduction": 0.1,
		"criticalStrikeChance": 0.15
	},
	"rarity": "Uncommon",
	"code": "운명의꽃",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Flower",
			"id": 205102
		},
		{
			"name": "Playing Cards",
			"id": 113102
		}
	],
	"displayName": "Flower of Fate",
	"apiMetaData": {
		"code": 205203,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
