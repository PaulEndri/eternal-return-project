import Item from '../../types/Item';

export const Nunchaku: Item = {
	"id": 119201,
	"name": "Nunchaku",
	"buildsFrom": [
		{
			"name": "Steel Chain",
			"id": 119101
		},
		{
			"name": "Scrap Metal",
			"id": 401106
		}
	],
	"buildsInto": [
		{
			"name": "Sharper",
			"id": 119301
		},
		{
			"name": "Bleeder",
			"id": 119302
		}
	],
	"requirements": {
		"Steel Chain": 1,
		"Scrap Metal": 1
	},
	"stats": {
		"attackPower": 27
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 119201,
		"category": "Weapon",
		"type": "Nunchaku"
	},
	"clientMetaData": {
		"type": "Nunchaku",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
