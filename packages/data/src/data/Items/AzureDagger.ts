import Item from '../../types/Item';

export const AzureDagger: Item = {
	"id": 113409,
	"name": "AzureDagger",
	"buildsInto": [],
	"requirements": {
		"Razor": 1,
		"Cross": 1,
		"Paper": 1,
		"Lighter": 1,
		"Water": 1
	},
	"stats": {
		"attackPower": 20,
		"charges": 50,
		"increaseBasicAttackDamage": 29,
		"increaseSkillDamage": 24
	},
	"rarity": "Epic",
	"code": "푸른색단도",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Blue weapons aren't always associated with ice or water...",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 113206
		},
		{
			"name": "Scissors",
			"id": 401302
		}
	],
	"displayName": "Azure Dagger",
	"apiMetaData": {
		"code": 113409,
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
