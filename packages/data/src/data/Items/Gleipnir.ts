import Item from '../../types/Item';

export const Gleipnir: Item = {
	"id": "Gleipnir",
	"name": "Gleipnir",
	"href": "/Gleipnir",
	"buildsFrom": [
		{
			"name": "Wind Whip",
			"id": "Wind Whip"
		},
		{
			"name": "Honey cod steak",
			"id": "Honey cod steak"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Whip": 1,
		"Stallion Medal": 1,
		"Fan": 1,
		"Cod": 1,
		"Honey": 1
	},
	"stats": {
		"attackPower": 54,
		"attackSpeedRatio": 0.3
	},
	"rarity": "Epic",
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
