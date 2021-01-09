import Item from '../../types/Item';

export const HeatedStone: Item = {
	"id": 401215,
	"name": "HeatedStone",
	"buildsInto": [
		{
			"name": "Fang Mace",
			"id": 104401
		},
		{
			"name": "Pellet Bow",
			"id": 114304
		},
		{
			"name": "Baked Potato",
			"id": 302303
		},
		{
			"name": "Baked Carp",
			"id": 302304
		},
		{
			"name": "Grilled Chilean Sea Bass",
			"id": 302306
		},
		{
			"name": "Steak",
			"id": 302323
		}
	],
	"requirements": {
		"Stone": 1,
		"Lighter": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "달궈진돌멩이",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 3,
	"description": "",
	"buildsFrom": [
		{
			"name": "Stone",
			"id": 112101
		},
		{
			"name": "Lighter",
			"id": 401107
		}
	],
	"displayName": "Heated Stone",
	"apiMetaData": {
		"code": 401215,
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
		}
	],
	"airSupply": true,
	"collectible": 0
}
