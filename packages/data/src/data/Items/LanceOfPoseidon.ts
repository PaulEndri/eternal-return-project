import Item from '../../types/Item';

export const LanceOfPoseidon: Item = {
	"id": 107405,
	"name": "LanceOfPoseidon",
	"buildsFrom": [
		{
			"name": "Bident",
			"id": 107301
		},
		{
			"name": "Pike",
			"id": 107302
		}
	],
	"buildsInto": [],
	"requirements": {
		"Short Spear": 2,
		"Bamboo": 1,
		"Kitchen Knife": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": 120,
		"moveSpeed": -0.05
	},
	"rarity": "Epic",
	"code": "트리아이나",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A powerful spear that can bring forth waves. It's said to have once been used by Poseidon.",
	"displayName": "Lance of Poseidon",
	"apiMetaData": {
		"code": 107405,
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
