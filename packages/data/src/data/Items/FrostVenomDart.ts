import Item from '../../types/Item';

export const FrostVenomDart: Item = {
	"id": 113408,
	"name": "FrostVenomDart",
	"buildsInto": [
		113502
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
		"increaseSkillDamageRatio": 20
	},
	"rarity": "Epic",
	"code": "빙백은침",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		113402,
		301103
	],
	"displayName": "Frost Venom Dart",
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
