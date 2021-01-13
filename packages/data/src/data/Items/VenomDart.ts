import Item from '../../types/Item';

export const VenomDart: Item = {
	"id": 113402,
	"name": "VenomDart",
	"buildsInto": [
		{
			"name": "Frost Venom Dart",
			"id": 113408
		}
	],
	"requirements": {
		"Needle": 1,
		"Paper": 1,
		"Lighter": 1,
		"Water": 1
	},
	"stats": {
		"attackPower": 55,
		"charges": 3,
		"criticalStrikeDamage": 0.2,
		"increaseSkillDamage": 15
	},
	"rarity": "Rare",
	"code": "독침",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "This deadly poison can kill an elephant within 3 seconds. Use it carefully.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 120101
		},
		{
			"name": "Scissors",
			"id": 401302
		}
	],
	"displayName": "Venom Dart",
	"apiMetaData": {
		"code": 113402,
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
