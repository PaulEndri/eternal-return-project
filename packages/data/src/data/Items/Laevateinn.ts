import Item from '../../types/Item';

export const Laevateinn: Item = {
	"id": 102409,
	"name": "Laevateinn",
	"buildsInto": [],
	"requirements": {
		"Tree of Life": 1,
		"Stone": 1,
		"Lighter": 2,
		"Rusty Sword": 1
	},
	"stats": {
		"attackPower": 75,
		"hpRegen": 1.5,
		"spRegen": 1.5,
		"preventBasicAttackDamaged": 20
	},
	"rarity": "Legend",
	"code": "레바테인",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "In Norse mythology, Laevateinn is a sword that was made by Loki by carving runes into it. In mythology, it is used to kill the invincible rooster, Vidofnir.",
	"buildsFrom": [
		205403,
		102201
	],
	"displayName": "Laevateinn",
	"apiMetaData": {
		"code": 102409,
		"category": "Weapon",
		"type": "TwoHandSword"
	},
	"clientMetaData": {
		"type": "Two-Handed Sword",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
