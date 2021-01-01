import Item from '../../types/Item';

export const LightningWhip: Item = {
	"id": 109402,
	"name": "LightningWhip",
	"buildsFrom": [
		{
			"name": "Bullwhip",
			"id": 109202
		},
		{
			"name": "Dead Battery",
			"id": 401205
		}
	],
	"buildsInto": [
		{
			"name": "Plasma Whip",
			"id": 109404
		}
	],
	"requirements": {
		"Whip": 1,
		"Razor": 1,
		"Battery": 1,
		"Water": 1
	},
	"stats": {
		"attackPower": 42,
		"attackSpeedRatio": 0.2
	},
	"rarity": "Rare",
	"code": "벽력편",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Lightning Whip",
	"apiMetaData": {
		"code": 109402,
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
