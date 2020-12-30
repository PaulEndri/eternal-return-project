import Item from '../../types/Item';

export const BambooSpear: Item = {
	"id": 107201,
	"name": "Bamboo Spear",
	"buildsFrom": [
		{
			"name": "Short Spear",
			"id": 107101
		},
		{
			"name": "Bamboo",
			"id": 108103
		}
	],
	"buildsInto": [
		{
			"name": "Bident",
			"id": 107301
		},
		{
			"name": "Sharpened Spear",
			"id": 107401
		},
		{
			"name": "Blazing Lance",
			"id": 107406
		}
	],
	"requirements": {
		"Short Spear": 1,
		"Bamboo": 1
	},
	"stats": {
		"attackPower": 37
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A spear made out of bamboo. Yup.",
	"apiMetaData": {
		"code": 107201,
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
