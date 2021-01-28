import Item from '../../types/Item';

export const Hatchet: Item = {
	"id": 105103,
	"name": "Hatchet",
	"buildsInto": [
		105202,
		107303,
		502305
	],
	"requirements": {},
	"stats": {
		"attackPower": 25
	},
	"rarity": "Common",
	"code": "손도끼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Pond": 4,
		"Factory": 4,
		"Beach": 5
	},
	"foundQuantity": 1,
	"description": "It looks heavy, so attack with it by slicing downward.",
	"buildsFrom": [],
	"displayName": "Hatchet",
	"apiMetaData": {
		"code": 105103,
		"category": "Weapon",
		"type": "Axe"
	},
	"clientMetaData": {
		"type": "Axe",
		"category": "Weapon"
	},
	"droppedFrom": [
		4
	],
	"airSupply": false,
	"collectible": 0
}
