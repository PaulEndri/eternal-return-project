import Item from '../../types/Item';

export const FlowerOfFate: Item = {
	"id": 205203,
	"name": "FlowerOfFate",
	"buildsInto": [
		120301,
		205501
	],
	"requirements": {
		"Flower": 1,
		"Playing Cards": 1
	},
	"stats": {
		"criticalStrikeChance": 0.15,
		"lifeSteal": 0.1
	},
	"rarity": "Uncommon",
	"code": "운명의꽃",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		205102,
		113102
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
