import Item from '../../types/Item';

export const LightningWhip: Item = {
	"id": 109402,
	"name": "LightningWhip",
	"buildsInto": [
		109404
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
	"buildsFrom": [
		109202,
		401205
	],
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
