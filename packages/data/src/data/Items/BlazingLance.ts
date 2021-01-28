import Item from '../../types/Item';

export const BlazingLance: Item = {
	"id": 107406,
	"name": "BlazingLance",
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
		"preventBasicAttackDamaged": 30
	},
	"rarity": "Legend",
	"code": "화첨창",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The length stretches freely, and flames spurt from the end of the spear; a treasure that appeared in \"Fengshen Yanyi.\"",
	"buildsFrom": [
		205403,
		107201
	],
	"displayName": "Blazing Lance",
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
