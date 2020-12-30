import Item from '../../types/Item';

export const Bracer: Item = {
	"id": 203203,
	"name": "Bracer",
	"buildsFrom": [
		{
			"name": "Bandage",
			"id": 203102
		},
		{
			"name": "Leather",
			"id": 401103
		}
	],
	"buildsInto": [
		{
			"name": "Bazuband",
			"id": 203303
		},
		{
			"name": "Draupnir",
			"id": 203403
		},
		{
			"name": "Auto-arms",
			"id": 203503
		}
	],
	"requirements": {
		"Bandage": 1,
		"Leather": 1
	},
	"stats": {
		"defense": 13,
		"hpRegen": 1
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Throw this on your wrist to protect you from the bow string.",
	"apiMetaData": {
		"code": 203203,
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
