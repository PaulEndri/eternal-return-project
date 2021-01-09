import Item from '../../types/Item';

export const Needle: Item = {
	"id": 120101,
	"name": "Needle",
	"buildsInto": [
		{
			"name": "Dart",
			"id": 113201
		},
		{
			"name": "Venom Dart",
			"id": 113402
		},
		{
			"name": "Rapier",
			"id": 120201
		},
		{
			"name": "Squad Leader Armband",
			"id": 203202
		},
		{
			"name": "Acupuncture Needle",
			"id": 302217
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 3,
		"criticalStrikeDamage": 0.25
	},
	"rarity": "Common",
	"code": "바늘",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Alley": 7,
		"Hospital": 6,
		"Hotel": 6
	},
	"foundQuantity": 1,
	"description": "An item with multiple uses; limited only by your imagination.",
	"buildsFrom": [],
	"displayName": "Needle",
	"apiMetaData": {
		"code": 120101,
		"category": "Weapon",
		"type": "Rapier"
	},
	"clientMetaData": {
		"type": "Rapier",
		"category": "Weapon"
	},
	"droppedFrom": [
		{
			"name": "Bat",
			"id": 2
		}
	],
	"airSupply": false,
	"collectible": 0
}
