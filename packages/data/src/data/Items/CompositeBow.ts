import Item from '../../types/Item';

export const CompositeBow: Item = {
	"id": 114203,
	"name": "CompositeBow",
	"buildsInto": [
		{
			"name": "Twinbow",
			"id": 114405
		}
	],
	"requirements": {
		"Bow": 1,
		"Rubber": 1,
		"Nail": 1
	},
	"stats": {
		"attackPower": 16,
		"decreaseRecoveryToBasicAttack": 1
	},
	"rarity": "Rare",
	"code": "컴포지트보우",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A high quality composite bow that was used in the East. There is a record of a man shooting over 440 meters during the England Archery Competition of 1795.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 114202
		},
		{
			"name": "Scissors",
			"id": 401101
		}
	],
	"displayName": "Composite Bow",
	"apiMetaData": {
		"code": 114203,
		"category": "Weapon",
		"type": "Bow"
	},
	"clientMetaData": {
		"type": "Bow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
