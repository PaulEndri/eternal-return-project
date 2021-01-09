import Item from '../../types/Item';

export const Watch: Item = {
	"id": 203101,
	"name": "Watch",
	"buildsInto": [
		{
			"name": "Vital Sign Sensor",
			"id": 203405
		},
		{
			"name": "Cube Watch",
			"id": 203408
		}
	],
	"requirements": {},
	"stats": {
		"attackSpeedRatio": 0.1
	},
	"rarity": "Common",
	"code": "손목시계",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Avenue": 7,
		"Hotel": 6,
		"Uptown": 6
	},
	"foundQuantity": 1,
	"description": "It's right twice a day.",
	"buildsFrom": [],
	"displayName": "Watch",
	"apiMetaData": {
		"code": 203101,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
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
