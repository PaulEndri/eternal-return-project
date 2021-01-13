import Item from '../../types/Item';

export const DeadBattery: Item = {
	"id": 401205,
	"name": "DeadBattery",
	"buildsInto": [
		{
			"name": "Lightning Whip",
			"id": 109402
		},
		{
			"name": "Ball Lightning",
			"id": 112303
		},
		{
			"name": "Single Coil Pickup",
			"id": 121202
		},
		{
			"name": "Ion Battery",
			"id": 401306
		}
	],
	"requirements": {
		"Battery": 1,
		"Water": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "방전전지",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 2,
	"description": "Is a dead battery still a battery? Just throw it at someone!",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 401110
		},
		{
			"name": "Scissors",
			"id": 301102
		}
	],
	"displayName": "Dead Battery",
	"apiMetaData": {
		"code": 401205,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		{
			"name": "Wolf",
			"id": 5
		},
		{
			"name": "Bear",
			"id": 6
		}
	],
	"airSupply": true,
	"collectible": 0
}
