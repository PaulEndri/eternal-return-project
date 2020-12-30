import Item from '../../types/Item';

export const HeatedStone: Item = {
	"id": 401215,
	"name": "Heated Stone",
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
			"id": "Baked Potato"
		},
		{
			"name": "Baked Carp",
			"id": "Baked Carp"
		},
		{
			"name": "Grilled Chilean Sea Bass",
			"id": "Grilled Chilean Sea Bass"
		},
		{
			"name": "Steak",
			"id": "Steak"
		}
	],
	"requirements": {
		"Stone": 1,
		"Lighter": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 3,
	"description": "",
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
