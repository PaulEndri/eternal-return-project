import Item from '../../types/Item';

export const Dart: Item = {
	"id": 113201,
	"name": "Dart",
	"buildsFrom": [
		{
			"name": "Needle",
			"id": 120101
		},
		{
			"name": "Feather",
			"id": 205101
		}
	],
	"buildsInto": [
		{
			"name": "Plumbata",
			"id": 113404
		}
	],
	"requirements": {
		"Needle": 1,
		"Feather": 1
	},
	"stats": {
		"attackPower": 16,
		"charges": 20,
		"criticalStrikeDamage": 0.2,
		"moveSpeed": 0.1
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It's cute, but it can be deadly if it hits the right spot.",
	"apiMetaData": {
		"code": 113201,
		"category": "Weapon",
		"type": "DirectFire"
	},
	"clientMetaData": {
		"type": "Shuriken",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
