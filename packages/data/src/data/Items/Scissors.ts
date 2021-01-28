import Item from '../../types/Item';

export const Scissors: Item = {
	"id": 101101,
	"name": "Scissors",
	"buildsInto": [
		121303,
		201203,
		202207,
		202209
	],
	"requirements": {},
	"stats": {
		"attackPower": 5
	},
	"rarity": "Common",
	"code": "가위",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Alley": 7,
		"Hospital": 6,
		"School": 6
	},
	"foundQuantity": 1,
	"description": "A basic pair of scissors. Snip snip.",
	"buildsFrom": [],
	"displayName": "Scissors",
	"apiMetaData": {
		"code": 101101,
		"category": "Weapon",
		"type": "OneHandSword"
	},
	"clientMetaData": {
		"type": "Dagger",
		"category": "Weapon"
	},
	"droppedFrom": [
		2
	],
	"airSupply": false,
	"collectible": 0
}
