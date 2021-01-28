import Item from '../../types/Item';

export const Bracer: Item = {
	"id": 203203,
	"name": "Bracer",
	"buildsInto": [
		203303,
		203403,
		203503
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
	"code": "브레이서",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Throw this on your wrist to protect you from the bow string.",
	"buildsFrom": [
		203102,
		401103
	],
	"displayName": "Bracer",
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
