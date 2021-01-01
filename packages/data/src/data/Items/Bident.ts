import Item from '../../types/Item';

export const Bident: Item = {
	"id": 107301,
	"name": "Bident",
	"buildsFrom": [
		{
			"name": "Bamboo Spear",
			"id": 107201
		},
		{
			"name": "Kitchen Knife",
			"id": 101104
		}
	],
	"buildsInto": [
		{
			"name": "Cosmic Bident",
			"id": 107404
		},
		{
			"name": "Lance of Poseidon",
			"id": 107405
		}
	],
	"requirements": {
		"Short Spear": 1,
		"Bamboo": 1,
		"Kitchen Knife": 1
	},
	"stats": {
		"attackPower": 52
	},
	"rarity": "Rare",
	"code": "바이던트",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The weapon of Hades, the Greek god of the underworld.  It's a two-pronged spear and one of the known treasures of Hades, along with his cornucopia and helmet.",
	"displayName": "Bident",
	"apiMetaData": {
		"code": 107301,
		"category": "Weapon",
		"type": "Spear"
	},
	"clientMetaData": {
		"type": "Spear",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
