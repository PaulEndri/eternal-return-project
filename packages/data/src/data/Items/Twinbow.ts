import Item from '../../types/Item';

export const Twinbow: Item = {
	"id": 114405,
	"name": "Twinbow",
	"buildsInto": [],
	"requirements": {
		"Branch": 1,
		"Piano Wire": 1,
		"Oil": 1,
		"Bow": 1,
		"Rubber": 1,
		"Nail": 1
	},
	"stats": {
		"attackPower": 70,
		"attackSpeedRatio": 0.5,
		"decreaseRecoveryToBasicAttack": 1
	},
	"rarity": "Epic",
	"code": "트윈보우",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A bow modified to fire arrows with more power by crossing the bowstrings.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 114301
		},
		{
			"name": "Scissors",
			"id": 114203
		}
	],
	"displayName": "Twinbow",
	"apiMetaData": {
		"code": 114405,
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
