import Item from '../../types/Item';

export const Dart: Item = {
	"id": 113201,
	"name": "Dart",
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
	"code": "다트",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It's cute, but it can be deadly if it hits the right spot.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 120101
		},
		{
			"name": "Scissors",
			"id": 205101
		}
	],
	"displayName": "Dart",
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
