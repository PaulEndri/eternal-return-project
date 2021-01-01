import Item from '../../types/Item';

export const VitalSignSensor: Item = {
	"id": 203405,
	"name": "VitalSignSensor",
	"buildsFrom": [
		{
			"name": "Watch",
			"id": 203101
		},
		{
			"name": "Cell Phone",
			"id": 501401
		}
	],
	"buildsInto": [
		{
			"name": "Radar",
			"id": 203502
		}
	],
	"requirements": {
		"Watch": 1,
		"Fountain Pen": 1,
		"Paper": 1,
		"Battery": 1,
		"Piano Wire": 1
	},
	"stats": {
		"attackSpeedRatio": 0.3,
		"defense": 15
	},
	"rarity": "Epic",
	"code": "바이탈센서",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Vital Sign Sensor",
	"apiMetaData": {
		"code": 203405,
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
