import Item from '../../types/Item';

export const RemoteMine: Item = {
	"id": "Remote Mine",
	"name": "Remote Mine",
	"href": "/Remote_Mine",
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
		"attackPower": 8
	},
	"rarity": "Legend",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
