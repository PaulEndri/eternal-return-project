import Item from '../../types/Item';

export const ChainArmor: Item = {
	"id": 202302,
	"name": "ChainArmor",
	"buildsInto": [
		{
			"name": "Commander's Armor",
			"id": 202412
		}
	],
	"requirements": {
		"Fabric Armor": 1,
		"Leather": 1,
		"Steel Chain": 1
	},
	"stats": {
		"defense": 30
	},
	"rarity": "Rare",
	"code": "사슬갑옷",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Armor used in both Asia and Europe in the past. Made out of interconnecting metal links.",
	"buildsFrom": [
		{
			"name": "Leather Armor",
			"id": 202201
		},
		{
			"name": "Steel Chain",
			"id": 119101
		}
	],
	"displayName": "Chain Armor",
	"apiMetaData": {
		"code": 202302,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
