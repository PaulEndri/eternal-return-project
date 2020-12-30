import Item from '../../types/Item';

export const Crossbow: Item = {
	"id": "Crossbow",
	"name": "Crossbow",
	"href": "/Crossbow",
	"buildsFrom": [
		{
			"name": "Short Crossbow",
			"id": 115101
		},
		{
			"name": "Bamboo",
			"id": 108103
		}
	],
	"buildsInto": [
		{
			"name": "Laser Crossbow",
			"id": 115302
		},
		{
			"name": "Steel Bow",
			"id": 115401
		},
		{
			"name": "Sharanga",
			"id": 115501
		}
	],
	"requirements": {
		"Short Crossbow": 1,
		"Bamboo": 1
	},
	"stats": {
		"attackPower": 30
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A mechanical bow that requires little human strength, but reloading takes a little longer than an ordinary bow.",
	"clientMetaData": {
		"type": "CrossBow",
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
