import Item from '../../types/Item';

export const Sharanga: Item = {
	"id": 115501,
	"name": "Sharanga",
	"buildsFrom": [
		{
			"name": "Force Core",
			"id": 401403
		},
		{
			"name": "Crossbow",
			"id": 115101
		}
	],
	"buildsInto": [],
	"requirements": {
		"Tree of Life": 1,
		"Stone": 1,
		"Meteorite": 1,
		"Short Crossbow": 1,
		"Bamboo": 1
	},
	"stats": {
		"attackPower": 140,
		"charges": 10
	},
	"rarity": "Legend",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 115501,
		"category": "Weapon",
		"type": "CrossBow"
	},
	"clientMetaData": {
		"type": "CrossBow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
