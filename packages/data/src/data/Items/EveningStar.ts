import Item from '../../types/Item';

export const EveningStar: Item = {
	"id": 104404,
	"name": "EveningStar",
	"buildsInto": [],
	"requirements": {
		"Meteorite": 1,
		"Stone": 1,
		"Hammer": 1,
		"Short Rod": 1,
		"Iron Ball": 1
	},
	"stats": {
		"attackPower": 150
	},
	"rarity": "Epic",
	"code": "개밥바라기",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
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
	"displayName": "Evening Star",
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
