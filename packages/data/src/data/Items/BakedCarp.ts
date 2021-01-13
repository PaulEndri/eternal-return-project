import Item from '../../types/Item';

export const BakedCarp: Item = {
	"id": 302304,
	"name": "BakedCarp",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Carp"
		},
		{
			"name": "Scissors",
			"id": "Heated Stone"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Carp": 1,
		"Stone": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 600
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "Fish is actually one of the most common foods to choke on.",
	"displayName": "Baked Carp",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302304,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
