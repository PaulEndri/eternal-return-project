import Item from '../../types/Item';

export const TurtleDobok: Item = {
	"id": 202203,
	"name": "TurtleDobok",
	"buildsFrom": [
		{
			"name": "Monk's Robe",
			"id": 202103
		},
		{
			"name": "Turtle Shell",
			"id": 401104
		}
	],
	"buildsInto": [
		{
			"name": "Dragon Dobok",
			"id": 202411
		}
	],
	"requirements": {
		"Monk's Robe": 1,
		"Turtle Shell": 1
	},
	"stats": {
		"cooldownReduction": 0.1,
		"defense": 10
	},
	"rarity": "Uncommon",
	"code": "거북도복",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A martial arts uniform worn by ninja turtles. They're obviously giant turtles, why do they need masks?",
	"displayName": "Turtle Dobok",
	"apiMetaData": {
		"code": 202203,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
