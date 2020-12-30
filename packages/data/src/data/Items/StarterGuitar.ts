import Item from '../../types/Item';

export const StarterGuitar: Item = {
	"id": 121101,
	"name": "Starter Guitar",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Golden Bridge",
			"id": 121201
		},
		{
			"name": "Single Coil Pickup",
			"id": 121202
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 5
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 121101,
		"category": "Weapon",
		"type": "Guitar"
	},
	"clientMetaData": {
		"type": "Guitar",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
