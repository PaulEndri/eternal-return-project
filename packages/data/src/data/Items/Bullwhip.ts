import Item from '../../types/Item';

export const Bullwhip: Item = {
	"id": "Bullwhip",
	"name": "Bullwhip",
	"href": "/Bullwhip",
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
			"id": "Thunder Whip"
		},
		{
			"name": "Lightning Whip",
			"id": "Lightning Whip"
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
	"clientMetaData": {
		"type": "Whip",
		"category": "Weapon"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
