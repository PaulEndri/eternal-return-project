import Item from '../../types/Item';

export const Beret: Item = {
	"id": 201203,
	"name": "Beret",
	"buildsFrom": [
		{
			"name": "Hat",
			"id": 201102
		},
		{
			"name": "Scissors",
			"id": 101101
		}
	],
	"buildsInto": [
		{
			"name": "Ballistic Helmet",
			"id": 201301
		}
	],
	"requirements": {
		"Hat": 1,
		"Scissors": 1
	},
	"stats": {
		"cooldownReduction": 0.13,
		"defense": 5,
		"maxHp": 50
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The trademark hat of painters and soldiers. It gets sweaty inside easily and it doesn't block the sun, but at least it looks cool.",
	"apiMetaData": {
		"code": 201203,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
