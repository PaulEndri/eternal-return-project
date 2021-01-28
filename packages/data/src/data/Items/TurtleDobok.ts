import Item from '../../types/Item';

export const TurtleDobok: Item = {
	"id": 202203,
	"name": "TurtleDobok",
	"buildsInto": [
		202411
	],
	"requirements": {
		"Monk's Robe": 1,
		"Turtle Shell": 1
	},
	"stats": {
		"defense": 10,
		"lifeSteal": 0.1
	},
	"rarity": "Uncommon",
	"code": "거북도복",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A martial arts uniform worn by ninja turtles. They're obviously giant turtles, why do they need masks?",
	"buildsFrom": [
		202103,
		401104
	],
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
