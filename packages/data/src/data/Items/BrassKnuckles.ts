import Item from '../../types/Item';

export const BrassKnuckles: Item = {
	"id": 110101,
	"name": "Brass Knuckles",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Iron Knuckles",
			"id": 110202
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 10
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Cemetery": 5,
		"Forest": 5
	},
	"foundQuantity": 1,
	"description": "These are actually illegal in a lot of countries.",
	"apiMetaData": {
		"code": 110101,
		"category": "Weapon",
		"type": "Glove"
	},
	"clientMetaData": {
		"type": "Glove",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
