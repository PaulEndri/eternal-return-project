import Item from '../../types/Item';

export const CubeWatch: Item = {
	"id": 203408,
	"name": "CubeWatch",
	"buildsInto": [],
	"requirements": {
		"Watch": 1,
		"Meteorite": 1,
		"Stone": 1
	},
	"stats": {
		"attackSpeedRatio": 0.5,
		"defense": 27
	},
	"rarity": "Rare",
	"code": "큐브워치",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Watch",
			"id": 203101
		},
		{
			"name": "Moonstone",
			"id": 401301
		}
	],
	"displayName": "Cube Watch",
	"apiMetaData": {
		"code": 203408,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
