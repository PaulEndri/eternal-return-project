import Item from '../../types/Item';

export const PelletBow: Item = {
	"id": 114304,
	"name": "Pellet Bow",
	"buildsFrom": [
		{
			"name": "Wooden Bow",
			"id": 114201
		},
		{
			"name": "Heated Stone",
			"id": 401215
		}
	],
	"buildsInto": [
		{
			"name": "Golden-Ratio Bow",
			"id": 114403
		}
	],
	"requirements": {
		"Branch": 1,
		"Piano Wire": 1,
		"Stone": 1,
		"Lighter": 1
	},
	"stats": {
		"attackPower": 55
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Can fire bullets instead of arrows. It'd be a good idea to check to see if there are more bullets around.",
	"apiMetaData": {
		"code": 114304,
		"category": "Weapon",
		"type": "Bow"
	},
	"clientMetaData": {
		"type": "Bow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
