import Item from '../../types/Item';

export const Beret: Item = {
	"id": 201203,
	"name": "Beret",
	"buildsInto": [
		201301
	],
	"requirements": {
		"Hat": 1,
		"Scissors": 1
	},
	"stats": {
		"cooldownReduction": 0.04,
		"defense": 10,
		"lifeSteal": 0.07,
		"maxHp": 60
	},
	"rarity": "Uncommon",
	"code": "베레모",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The trademark hat of painters and soldiers. It gets sweaty inside easily and it doesn't block the sun, but at least it looks cool.",
	"buildsFrom": [
		201102,
		101101
	],
	"displayName": "Beret",
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
