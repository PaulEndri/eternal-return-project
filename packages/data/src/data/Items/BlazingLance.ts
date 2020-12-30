import Item from '../../types/Item';

export const BlazingLance: Item = {
	"id": 107406,
	"name": "Blazing Lance",
	"buildsFrom": [
		{
			"name": "True Samadhi Fire",
			"id": 205403
		},
		{
			"name": "Bamboo Spear",
			"id": 107201
		}
	],
	"buildsInto": [],
	"requirements": {
		"Tree of Life": 1,
		"Stone": 1,
		"Lighter": 1,
		"Short Spear": 1,
		"Bamboo": 1
	},
	"stats": {
		"attackPower": 110,
		"hpRegen": 1.5,
		"spRegen": 1.5,
		"increaseBasicAttackDamage": 30
	},
	"rarity": "Legend",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The length stretches freely, and flames spurt from the end of the spear; a treasure that appeared in \"Fengshen Yanyi.\"",
	"apiMetaData": {
		"code": 107406,
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
