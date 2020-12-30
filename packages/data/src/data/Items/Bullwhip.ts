import Item from '../../types/Item';

export const Bullwhip: Item = {
	"id": 109202,
	"name": "Bullwhip",
	"buildsFrom": [
		{
			"name": "Whip",
			"id": 109101
		},
		{
			"name": "Razor",
			"id": 113101
		}
	],
	"buildsInto": [
		{
			"name": "Thunder Whip",
			"id": 109401
		},
		{
			"name": "Lightning Whip",
			"id": 109402
		}
	],
	"requirements": {
		"Whip": 1,
		"Razor": 1
	},
	"stats": {
		"attackPower": 19
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 109202,
		"category": "Weapon",
		"type": "Whip"
	},
	"clientMetaData": {
		"type": "Whip",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
