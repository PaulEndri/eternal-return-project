import Item from '../../types/Item';

export const FrostVenomDart: Item = {
	"id": 113408,
	"name": "Frost Venom Dart",
	"buildsFrom": [
		{
			"name": "Venom Dart",
			"id": 113402
		},
		{
			"name": "Ice",
			"id": 301103
		}
	],
	"buildsInto": [
		{
			"name": "Petal Torrent",
			"id": 113502
		}
	],
	"requirements": {
		"Needle": 1,
		"Paper": 1,
		"Lighter": 1,
		"Water": 1,
		"Ice": 1
	},
	"stats": {
		"attackPower": 80,
		"charges": 3,
		"criticalStrikeDamage": 0.5,
		"increaseSkillDamage": 20
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 113408,
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
