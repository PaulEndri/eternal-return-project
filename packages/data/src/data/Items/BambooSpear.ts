import Item from '../../types/Item';

export const BambooSpear: Item = {
	"id": 107201,
	"name": "BambooSpear",
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
	"code": "죽창",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A spear made out of bamboo. Yup.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 107101
		},
		{
			"name": "Scissors",
			"id": 108103
		}
	],
	"displayName": "Bamboo Spear",
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
