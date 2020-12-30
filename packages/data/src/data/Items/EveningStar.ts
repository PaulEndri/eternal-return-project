import Item from '../../types/Item';

export const EveningStar: Item = {
	"id": 104404,
	"name": "Evening Star",
	"buildsFrom": [
		{
			"name": "Moonstone",
			"id": 401301
		},
		{
			"name": "Morning Star",
			"id": 104301
		}
	],
	"buildsInto": [],
	"requirements": {
		"Meteorite": 1,
		"Stone": 1,
		"Hammer": 1,
		"Short Rod": 1,
		"Iron Ball": 1
	},
	"stats": {
		"attackPower": 145
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 104404,
		"category": "Weapon",
		"type": "Hammer"
	},
	"clientMetaData": {
		"type": "Hammer",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
