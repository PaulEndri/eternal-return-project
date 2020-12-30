import Item from '../../types/Item';

export const RustySword: Item = {
	"id": 102101,
	"name": "Rusty Sword",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Shamshir",
			"id": 102201
		},
		{
			"name": "Katana",
			"id": 102301
		},
		{
			"name": "Bastard Sword",
			"id": 102403
		},
		{
			"name": "Twin Swords",
			"id": 103201
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 11
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Temple": 4,
		"Chapel": 4,
		"Dock": 4
	},
	"foundQuantity": 1,
	"description": "Every swordsman must train with this common longsword.",
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
