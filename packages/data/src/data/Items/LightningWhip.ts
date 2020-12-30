import Item from '../../types/Item';

export const LightningWhip: Item = {
	"id": "Lightning Whip",
	"name": "Lightning Whip",
	"href": "/Lightning_Whip",
	"buildsFrom": [
		{
			"name": "Bullwhip",
			"id": "Bullwhip"
		},
		{
			"name": "Dead Battery",
			"id": 401205
		}
	],
	"buildsInto": [
		{
			"name": "Plasma Whip",
			"id": "Plasma Whip"
		}
	],
	"requirements": {
		"Whip": 1,
		"Razor": 1,
		"Battery": 1,
		"Water": 1
	},
	"stats": {
		"attackPower": 41,
		"attackSpeedRatio": 0.2
	},
	"rarity": "Rare",
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
