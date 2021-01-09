import Item from '../../types/Item';

export const Battery: Item = {
	"id": 401110,
	"name": "Battery",
	"buildsInto": [
		{
			"name": "Dead Battery",
			"id": 401205
		},
		{
			"name": "Electronic Parts",
			"id": 401211
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "배터리",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Avenue": 7,
		"Factory": 9,
		"Dock": 7
	},
	"foundQuantity": 1,
	"description": "Would be good for a flashlight, remote control, or your beeping smoke detector.",
	"buildsFrom": [],
	"displayName": "Battery",
	"apiMetaData": {
		"code": 401110,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		{
			"name": "WildDog",
			"id": 4
		}
	],
	"airSupply": false,
	"collectible": 0
}
