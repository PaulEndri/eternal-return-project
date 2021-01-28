import Item from '../../types/Item';

export const RustySword: Item = {
	"id": 102101,
	"name": "RustySword",
	"buildsInto": [
		102201,
		102301,
		102403,
		103201,
		205211
	],
	"requirements": {},
	"stats": {
		"attackPower": 11
	},
	"rarity": "Common",
	"code": "녹슨검",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Archery Range": 5,
		"Chapel": 5,
		"Dock": 6
	},
	"foundQuantity": 1,
	"description": "Every swordsman must train with this common longsword.",
	"buildsFrom": [],
	"displayName": "Rusty Sword",
	"apiMetaData": {
		"code": 102101,
		"category": "Weapon",
		"type": "TwoHandSword"
	},
	"clientMetaData": {
		"type": "Two-Handed Sword",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
