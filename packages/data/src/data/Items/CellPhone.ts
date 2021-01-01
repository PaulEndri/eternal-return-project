import Item from '../../types/Item';

export const CellPhone: Item = {
	"id": 501401,
	"name": "CellPhone",
	"buildsFrom": [
		{
			"name": "Blueprint",
			"id": 401212
		},
		{
			"name": "Electronic Parts",
			"id": 401211
		}
	],
	"buildsInto": [
		{
			"name": "Vital Sign Sensor",
			"id": 203405
		},
		{
			"name": "Smart Bomb",
			"id": 502502
		}
	],
	"requirements": {
		"Fountain Pen": 1,
		"Paper": 1,
		"Battery": 1,
		"Piano Wire": 1
	},
	"stats": {},
	"rarity": "Rare",
	"code": "휴대폰",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "I'm not getting any bars here...",
	"displayName": "Cell Phone",
	"apiMetaData": {
		"code": 501401,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		{
			"name": "Bear",
			"id": 6
		},
		{
			"name": "Wickline",
			"id": 7
		}
	],
	"airSupply": true,
	"collectible": 0
}
