import Item from '../../types/Item';

export const Hat: Item = {
	"id": 201102,
	"name": "Hat",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Beret",
			"id": 201203
		},
		{
			"name": "Chain Coif",
			"id": 201204
		}
	],
	"requirements": {},
	"stats": {
		"cooldownReduction": 0.05,
		"defense": 4
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Pond": 7,
		"Archery Range": 5,
		"School": 6
	},
	"foundQuantity": 1,
	"description": "Nothing beats than a simple cap when it's sunny, raining, or snowing.",
	"apiMetaData": {
		"code": 201102,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
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
