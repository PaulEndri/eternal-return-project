import Item from '../../types/Item';

export const RemoteMine: Item = {
	"id": 502501,
	"name": "RemoteMine",
	"buildsFrom": [
		{
			"name": "Force Core",
			"id": 401403
		},
		{
			"name": "Spiked Plank",
			"id": 502201
		}
	],
	"buildsInto": [],
	"requirements": {
		"Tree of Life": 1,
		"Stone": 1,
		"Meteorite": 1,
		"Mousetrap": 1,
		"Nail": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Legend",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"displayName": "Remote Mine",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502501,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
