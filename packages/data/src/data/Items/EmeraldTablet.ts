import Item from '../../types/Item';

export const EmeraldTablet: Item = {
	"id": 205501,
	"name": "EmeraldTablet",
	"buildsFrom": [
		{
			"name": "Force Core",
			"id": 401403
		},
		{
			"name": "Flower of Fate",
			"id": 205203
		}
	],
	"buildsInto": [],
	"requirements": {
		"Tree of Life": 1,
		"Stone": 1,
		"Meteorite": 1,
		"Flower": 1,
		"Playing Cards": 1
	},
	"stats": {
		"attackPower": 10,
		"cooldownReduction": 0.1,
		"criticalStrikeChance": 0.15,
		"defense": 10
	},
	"rarity": "Legend",
	"code": "에메랄드타블렛",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Emerald Tablet",
	"apiMetaData": {
		"code": 205501,
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
