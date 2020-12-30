import Item from '../../types/Item';

export const Scissors: Item = {
	"id": 101101,
	"name": "Scissors",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "King-V",
			"id": 121303
		},
		{
			"name": "Beret",
			"id": 201203
		},
		{
			"name": "Dress",
			"id": 202207
		},
		{
			"name": "Bikini",
			"id": 202209
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 5
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Alley": 7,
		"Hospital": 6,
		"School": 6
	},
	"foundQuantity": 1,
	"description": "A basic pair of scissors. Snip snip.",
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
		{
			"name": "Bat",
			"id": 2
		}
	],
	"airSupply": false,
	"collectible": 0
}
